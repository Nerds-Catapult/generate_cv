package response


import (
	"github.com/Domains18/generate_cv/pkg/config"
	"github.com/gin-gonic/gin"
)

func Error(c *gin.Context, status int, err error, message string){
	cfg := config.GetConfig()
	errorRes := map[string]interface{}{
		"message": message,
	}
	if cfg.Environment != config.ProductionEnv{
		errorRes["debug"] = err.Error()
	}
	c.JSON(status, Response{Error: errorRes})
}