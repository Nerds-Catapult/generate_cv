package utils

import (
	"golang.org/x/crypto/bcrypt"
	"log"
	_ "log"
)

func HashAndSalt(password []byte) string{
	hashed, err := bcrypt.GenerateFromPassword(password, bcrypt.MinCost)
	if err != nil{
		log.Printf("Error on hashing password, error: %v", err)
		return ""
	}
	return string(hashed)
}