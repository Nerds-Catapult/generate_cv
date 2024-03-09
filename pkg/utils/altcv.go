package utils

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strings"
)

func AltaCvMod() error {
	StringArray := []string{"pdfx", "biber", "bibhang", "biblabelsep", "pubtype", "bibsetup", "bibitemsep", "trimclip"}
	file, err := os.OpenFile("altacv.cls", os.O_RDWR, 0644)
	if err != nil {
		log.Println("error opening file", err)
		return err
	}
	defer func(file *os.File) {
		err := file.Close()
		if err != nil {
			log.Fatal(err)
		}
	}(file)
	scanner := bufio.NewScanner(file)
	var lines []string
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}
	defer func(file *os.File) {
		err := file.Close()
		if err != nil {
			log.Fatal(err)
		}
	}(file)

	for _, line := range lines {
		keepLine := true
		for _, val := range StringArray {
			if strings.Contains(line, val) {
				keepLine = false
				break
			}
		}
		if keepLine {
			newLine := strings.Replace(line, "pdfstringdef", "escape", -1)
			fmt.Fprintf(file, newLine)
		}
	}
	modifications := `
	% Modification
	\newcommand{\cvproject}[3]{%
  	{\large\color{emphasis}#1\par}
  	\smallskip\normalsize
  	\ifstrequal{#2}{}{}{
  	\textbf{\color{accent}#2}\par
  	\smallskip}
  	\ifstrequal{#3}{}{}{{\small\makebox[0.5\linewidth][l]{\faCalendar~#3}}}%
  	\medskip\normalsize
	}
	\newcommand{\cvskillstr}[2]{%
  	\textcolor{emphasis}{\textbf{#1}}\hfill
  	\textbf{\color{body}#2}\par
	}
	`
	fmt.Fprintln(file, modifications)
	log.Println("Refactor complete")
	return nil
}
