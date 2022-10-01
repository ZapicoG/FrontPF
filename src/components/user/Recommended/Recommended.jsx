import React from "react"

const products = [
    {
      id: 1,
      name: 'Vivobook 15X OLED',
      href: '#',
      imageSrc: 'https://dlcdnwebimgs.asus.com/gain/9b2e4140-0b4c-4427-9712-7976766d8ef0/',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$3.999.000',
    },
    {
        id: 2,
        name: 'Audifonos Bose Soundlink',
        href: '#',
        imageSrc: 'https://www.alkosto.com/medias/017817703277-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzMzc4OXxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDgzLzkwNjU0MTU4Njg0NDYuanBnfGQ0YzA0YzU3ZTRhNTc4ODNhMzk1Y2JkN2RhMDNkZDU1MWRkYTY3NGI4YjQ5NmQ5Y2U3MTUzNDQyYWNkNWYwODc',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$999.900',
      },
      {
        id: 3,
        name: 'Televisor LG 32 LED HD',
        href: '#',
        imageSrc: 'https://exitocol.vtexassets.com/arquivos/ids/11110776-800-auto?v=637742799929970000&width=800&height=auto&aspect=true',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$1.149.000',
      },
      {
        id: 4,
        name: 'Xiaomi Redmi Note 11 pro 5G 128GB Azul',
        href: '#',
        imageSrc: 'https://www.ktronix.com/medias/6934177770661-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNjI5MTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDFlL2gwMS8xMjQxNTk1MzMwNTYzMC5qcGd8NTliMmJhNTNmN2JhM2E3MGRlNDMxZmU1YTg5MTFlZDE0NTg0ODM5ODY5YzA1MmNkYjY5YWYzZmViODQzMWM1YQ',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$1.899.000',
      },
    // More products...
  ]
  
  export default function Recommended() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recomendados</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  