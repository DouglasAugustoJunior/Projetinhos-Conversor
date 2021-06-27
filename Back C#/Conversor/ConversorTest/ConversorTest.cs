using Xunit;

namespace ConversorTest
{
    public class ConversorTest
    {
        [Theory]
        [InlineData(0)]
        [InlineData(1)]
        [InlineData(10)]
        [InlineData(null)]
        //[InlineData(-1)]
        public void Bin2Dec(int valor) => Assert.NotNull(Conversor.Helpers.Conversor.Bin2Dec(valor));

        [Theory]
        [InlineData(0)]
        [InlineData(1)]
        [InlineData(10)]
        [InlineData(null)]
        //[InlineData(-1)]
        public void Dec2Bin(int valor) => Assert.NotNull(Conversor.Helpers.Conversor.Dec2Bin(valor));

        [Theory]
        [InlineData(0)]
        [InlineData(1)]
        [InlineData(10)]
        [InlineData(null)]
        //[InlineData(-1)]
        public void Bin2Hex(int valor) => Assert.NotNull(Conversor.Helpers.Conversor.Bin2Hex(valor));
    }
}
