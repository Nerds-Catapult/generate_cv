package utils

import (
	"fmt"
	"math/rand"
	"strings"
	"time"
)

const (
	Charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
	RandLength = 8
)

var seededRand *rand.Rand = rand.New(rand.NewSource(time.Now().UnixNano()))

func GenerateCode(prefix string) string{
	t := time.Now()
	y := ""
	if t.Year() < 10 {
		y = fmt.Sprintf("0%d", t.Year())
	} else{
		y = fmt.Sprintf("%d", t.Year())
	}
	m := ""
	if t.Month() < 10 {
		m = fmt.Sprintf("0%d", t.Month())
	} else{
		m = fmt.Sprintf("%d", t.Month())
	}
	d := ""
	if t.Day() < 10 {
		d = fmt.Sprintf("0%d", t.Day())
	} else{
		d = fmt.Sprintf("%d", t.Day())
	}
	code := fmt.Sprintf("%s%s%s%s%s", prefix, y, m, d, GenerateRandomString(RandLength))
	return strings.ToUpper(code)
}

func stringsContainsCharset(length int ) string {
	b := make([]byte, length)
	for k := range b {
		b[k] = Charset[seededRand.Intn(len(Charset))]
	}
	return string(b)
}

func GenerateRandomString(length int) string{
	return stringsContainsCharset(length)
}