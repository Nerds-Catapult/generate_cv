package errorHandler

import (
	"encoding/json"
	"log"
	"net/http"
)

type ErrorString struct {
	code    int    `json:"code"`
	message string `json:"message"`
}

func (e *ErrorString) Error() string {
	return e.message
}

func ErrorHandler(next http.Handler) http.Handler{
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
		defer func() {
			if r := recover(); r != nil {
				log.Printf("Recovered from panic: %v", r)

				err := &ErrorString{ code: http.StatusInternalServerError, message: "Internal Server Error" }
				w.Header().Set("Content-Type", "application/json")
				w.WriteHeader(err.code)
				w.Write([]byte(err.message))
				json.NewEncoder(w).Encode(err)
			}
		}()
		next.ServeHTTP(w, r)
	})
}
