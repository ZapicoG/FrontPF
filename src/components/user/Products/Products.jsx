import * as React from "react";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AddShoppingCart } from "@mui/icons-material";
import accounting from "accounting";

const products = [
  {
    id: 1,
    name: "Computador",
    model: "Computador con accesorios",
    brand: "",
    description: "Computador con todos los accesorios en descuento",
    price: 1000000,
    thumbnail:
      "https://todotintasysuministros.com/assets/media/computador/hg/hg01081.png?u=1654958571",
    hidden: "",
    condition: "nuevo",
    cartProductoId: "",
  },
  {
    id: 2,
    name: "Celular xiaomi'",
    model: "Celular xiaomi redmi",
    brand: "",
    description: "Celular xiaomi azul ocaso 128GB",
    price: 1000000,
    thumbnail:
      "https://jumbocolombiaio.vtexassets.com/arquivos/ids/298615-800-600?v=637837572184630000&width=800&height=600&aspect=true",
    hidden: "",
    condition: "nuevo",
    cartProductoId: "",
  },
  {
    id: 3,
    name: "Celular iphone'",
    model: "Celular iphone'",
    brand: "",
    description: "iphone 13 pro max 256gb",
    price: 1000000,
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0485/4566/1094/products/iPhone13ProMax-1_900x.jpg?v=1634758315",
    hidden: "",
    condition: "nuevo",
    cartProductoId: "",
  },
  {
    id: 4,
    name: "Televisor LG",
    model: "Televisor LG",
    brand: "",
    description: "Televisor LG UHD 65 LED 4K",
    price: 1000000,
    thumbnail:
      "https://www.lg.com/co/images/televisores/md07553134/gallery/D-1.jpg",
    hidden: "",
    condition: "nuevo",
    cartProductoId: "",
  },
  {
    id: 5,
    name: "Televisor xiaomi",
    model: "Televisor xiaomi",
    brand: "",
    description: 'Tv XIAOMI 43" 4K-UHD LED plano Smart TV',
    price: 1000000,
    thumbnail:
      "https://falabella.scene7.com/is/image/FalabellaCO/32332777_1?wid=800&hei=800&qlt=70",
    hidden: "",
    condition: "nuevo",
    cartProductoId: "",
  },
  {
    id: 6,
    name: "MacBook pro M2",
    model: "MacBook pro M2",
    brand: "",
    description: "Apple MacBook pro M2",
    price: 1000000,
    thumbnail:
      "https://itechcolombia.co/wp-content/uploads/2022/08/mbp-silver-select-202206.png",
    hidden: "",
    condition: "nuevo",
    cartProductoId: "",
  },
  {
    id: 7,
    name: "Portatil Lenovo",
    model: "Portatil Lenovo",
    brand: "",
    description: "Computador con todos los accesorios en descuento",
    price: 1000000,
    thumbnail:
      "https://pcsystemcolombia.com/wp-content/uploads/2021/02/Port%C3%A1til-Lenovo-V145-14AST-AMD-A4-9125.jpg",
    hidden: "",
    condition: "nuevo",
    cartProductoId: "",
  },
  {
    id: 8,
    name: "Celular Oppo",
    model: "Celular Oppo",
    brand: "",
    description: "Celular Oppo A 54 128GB",
    price: 1000000,
    thumbnail:
      "https://falabella.scene7.com/is/image/FalabellaCO/16136638_1?wid=800&hei=800&qlt=70",
    hidden: "",
    condition: "nuevo",
    cartProductoId: "",
  },
];
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function Products() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center px-40 py-10">
        {products.map((product) => (
          <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-28 py-36 px-10 flex justify-center items-center">
            <img
              className="group-hover:opacity-60 transition duration-500"
              src={product.thumbnail}
              alt="sofa-2"
            />
            <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
              <div>
                <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">
                  {product.name}
                </p>
                <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">
                  {product.condition}
                </p>
              </div>
              <div>
                <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800">
                {accounting.formatMoney(product.price, "$")}
                </p>
                <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">
                  {product.brand}
                </p>
              </div>
            </div>

            <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
              <CardActions disableSpacing>
                <IconButton aria-label="Add to cart">
                  <AddShoppingCart fontSize="large" />
                </IconButton>
              
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>{product.model}</Typography>

                  <Typography paragraph>{product.description}</Typography>
                </CardContent>
              </Collapse>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
