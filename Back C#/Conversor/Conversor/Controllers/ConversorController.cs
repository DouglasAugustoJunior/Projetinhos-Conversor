using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Conversor.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConversorController : ControllerBase
    {
        private const string MENSAGEM_PADRAO = "Rodando na porta 3000!";

        public ConversorController(){ }

        [HttpGet]
        [Route("/")]
        public string Get() => MENSAGEM_PADRAO;

        [HttpPost]
        [Route("/bin2dec")]
        public int Bin2dec([FromBody] ConversorModel model) => Helpers.Conversor.Bin2Dec(model.valor);

        [HttpPost]
        [Route("/dec2bin")]
        public string Dec2bin([FromBody] ConversorModel model) => Helpers.Conversor.Dec2Bin(model.valor);

        [HttpPost]
        [Route("/bin2hex")]
        public string Bin2hex([FromBody] ConversorModel model) => Helpers.Conversor.Bin2Hex(model.valor);
    }
}
