using System;

namespace Conversor.Helpers
{
    public abstract class Conversor
    {
        public static int Bin2Dec(int valor) => Convert.ToInt32(valor.ToString(), 2);

        public static string Dec2Bin(int valor) => Convert.ToString(valor, 2);

        public static string Bin2Hex(int valor) => Convert.ToInt32(valor.ToString(), 2).ToString("X");
    }
}
