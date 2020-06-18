using System.Collections.Generic;
using System.Linq;

namespace ConsolaFactura
{
    public class Factura
    {
        public int Id { get; set; }

        public List<Item> Items { get; set; }

        public decimal Total
        {
            get
            {
                return Items.Sum(i => i.Monto);
            }
        }

        public decimal Comision
        {
            get
            {
                return Total / 100;
            }
        }
    }
}
