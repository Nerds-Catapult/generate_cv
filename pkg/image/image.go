package image

import (
	"bytes"
	"encoding/base64"
	"errors"
	"fmt"
	"image"
	"image/jpeg"
	"image/png"
	"io"
	"log"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strings"
)

func StringInSlice(a string, list []string) bool {
	for _, b := range list {
		if b == a {
			return true
		}
	}
	return false
}

func Mimecheck(response http.Response) (string, error) {
	contentType := strings.Split(response.Header.Get("Content-Type"), ";")[0]
	extension := strings.Split(contentType, "/")[1]
	if StringInSlice(extension, []string{"jpeg", "jpg", "png", "webpg"}) {
		return extension, nil
	}
	return "", errors.New("the selected field does not have a proper image extension")
}

func IsUrl(str string) bool {
	u, err := url.Parse(str)
	return err == nil && u.Scheme != "" && u.Host != ""
}

func IsImageFileExist(path string) bool {
	info, err := os.Stat(path)
	if err != nil {
		return false
	}
	return !info.IsDir()
}

func ImageFromUrl(URL, dirName string) (string, error) {
	response, err := http.Get(URL)
	if err != nil {
		return "", err
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
		}
	}(response.Body)
	if response.StatusCode != 200 {
		return "", errors.New("status not okay received")
	}
	fileExt, err := Mimecheck(*response)
	if err != nil {
		return "", err
	}
	imageName := fmt.Sprintf("Image.%s", fileExt)
	fileName := filepath.Join(dirName, imageName)
	file, err := os.Create(fileName)
	if err != nil {
		return "", err
	}
	defer func(file *os.File) {
		err := file.Close()
		if err != nil {
			log.Fatal("at log fatal", err)
		}
	}(file)

	_, err = io.Copy(file, response.Body)
	if err != nil {
		return "", err
	}
	return fileName, err
}

func ImageFromBase64(based64String string, dirName string) (string, error) {
	trimmedBased64String := strings.TrimPrefix(based64String, "data:image/jpeg;base64")
	trimmedBased64String = strings.TrimPrefix(trimmedBased64String, "data:image/png;base64")
	imageData, err := base64.StdEncoding.DecodeString(trimmedBased64String)
	if err != nil {
		return "", err
	}
	parts := strings.Split(based64String, ",")
	metadata := parts[0]
	typedAndEncoding := strings.Split(metadata, ",")
	fileType := typedAndEncoding[1]
	base64Extension := strings.Split(fileType, "/")[1]
	extension := strings.Split(base64Extension, ";")[0]

	imageName := filepath.Join(dirName, "image."+extension)
	f, err := os.Create(imageName)
	if err != nil {
		return "", err
	}
	defer func(f *os.File) {
		err := f.Close()
		if err != nil {
			log.Fatal("error", err)
		}
	}(f)

	img, _, err := image.Decode(bytes.NewReader(imageData))
	if err != nil {
		return "", err
	}
	switch extension {
	case "jpeg":

		err = jpeg.Encode(f, img, &jpeg.Options{Quality: 75})
	case "jpg":
		err = png.Encode(f, img)
	default:
		err = fmt.Errorf("unsopported image format: %s", extension)
	}
	if err != nil {
		return "", err
	}
	return imageName, nil
}
