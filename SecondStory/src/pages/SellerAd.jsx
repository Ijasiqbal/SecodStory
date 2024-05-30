import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function SellerAd() {
  const cardsData = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4b232c558e666b02aead3e648b04c69c0d1f0623dde1b27688b3f782c64cde2d?apiKey=d486896be9e345128b8f51543dad92f5&",
      imgAlt: "Book cover for Life’s Amazing Secrets by Gaur Gopal Das",
      title: "Life’s Amazing Secrets",
      author: "Gaur Gopal Das",
      price: "Rs. 151.00",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b95eaad9a1f9090fd109c15cd10fba71c30a3cc15f8a900924bc39737a294165?apiKey=d486896be9e345128b8f51543dad92f5&",
      imgAlt: "Book cover for Life’s Amazing Secrets by Gaur Gopal Das",
      title: "Life’s Amazing Secrets",
      author: "Gaur Gopal Das",
      price: "Rs. 151.00",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ac016219b661c9c2c1490a41394cef07065347350395de1f12c2786a87127ef?apiKey=d486896be9e345128b8f51543dad92f5&",
      imgAlt: "Book cover for Life’s Amazing Secrets by Gaur Gopal Das",
      title: "Life’s Amazing Secrets",
      author: "Gaur Gopal Das",
      price: "Rs. 151.00",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4b232c558e666b02aead3e648b04c69c0d1f0623dde1b27688b3f782c64cde2d?apiKey=d486896be9e345128b8f51543dad92f5&",
      imgAlt: "Book cover for Life’s Amazing Secrets by Gaur Gopal Das",
      title: "Life’s Amazing Secrets",
      author: "Gaur Gopal Das",
      price: "Rs. 151.00",
    },
  ];
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b5ed3cf5ac5dd369796571c3ccac1c14474070df1e4dcef46473f2793c6caf4?apiKey=d486896be9e345128b8f51543dad92f5&",
      alt: "",
      className: "w-full aspect-[0.85]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35ded7a16e08f7d279c9f8f73aba5190fa6971f7bd1400b586f350e6803fe34c?apiKey=d486896be9e345128b8f51543dad92f5&",
      alt: "Image description 1",
      className: "shrink-0 self-start aspect-[0.83] w-[95px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/979803482ede6ca336a3a3fd602ffa6bf85ad01eecd7587faf5cb70ae234d738?apiKey=d486896be9e345128b8f51543dad92f5&",
      alt: "Image description 2",
      className:
        "shrink-0 max-w-full border-blue-600 border-solid aspect-[0.87] border-[5px] w-[106px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/06434364745fb78844c3349247ad4f4af17f7041982f9ddfbe31494b2536634e?apiKey=d486896be9e345128b8f51543dad92f5&",
      alt: "Image description 3",
      className: "shrink-0 aspect-[0.85] w-[95px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff0eb29e764f2b740f67cdf508e1daeeb8a1135405a143c8dbbdeb568bdb1de4?apiKey=d486896be9e345128b8f51543dad92f5&",
      alt: "Image description 4",
      className: "shrink-0 my-auto w-14 aspect-square",
    },
  ];

  function Card({ imgSrc, imgAlt, title, author, price }) {
    return (
      <div className="flex flex-col grow px-3 pt-2.5 pb-9 mt-2.5 w-full text-black rounded-xl border-1 border-slate-400 border-solid max-md:mt-10">
        <img
          loading="lazy"
          src={imgSrc}
          alt={imgAlt}
          className="self-center aspect-[0.68] w-[181px]"
        />
        <div className="mt-5 mr-4 ml-4 text-base leading-6 max-md:mx-2.5">
          {title}
        </div>
        <div className="self-start mt-2.5 ml-2.5 text-lg font-medium leading-7">
          {author}
        </div>
        <div className="self-start mt-2.5 ml-2.5 text-base leading-7">
          {price}
        </div>
      </div>
    );
  }

  function Image({ src, alt, className }) {
    return <img loading="lazy" src={src} alt={alt} className={className} />;
  }

  const Header = ({ title, imgSrc, imgAlt }) => (
    <header className="flex gap-5 text-3xl font-medium text-black max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto">{title}</div>
      <img
        loading="lazy"
        src={imgSrc}
        alt={imgAlt}
        className="shrink-0 aspect-square w-[31px]"
      />
    </header>
  );

  function UserCard({ name, location, postingDate, description, price }) {
    return (
      <section className="flex gap-5 max-md:flex-col max-md:gap-0">
        <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <h2 className="flex flex-col grow text-black max-md:mt-10">
            <div className="flex flex-col pl-2.5">
              <div className="flex gap-3 items-center text-2xl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/361864214badb4aface990e32390bdbcf8840de9bd3f6bb1737f770fdd4729e1?apiKey=d486896be9e345128b8f51543dad92f5&"
                  className="shrink-0 aspect-[1.01] w-[83px]"
                  alt="User Avatar"
                />
                <span className="flex-auto my-auto">{name}</span>
              </div>

              {/* <div className="self-start mt-10 ml-3.5 text-s max-md:mt-10 max-md:ml-2.5">
                Location
              </div>
              <p className="mt-1 text-lg font-medium">{location}</p> */}
              <div className="flex gap-1 items-start -ml-3 mt-11 font-medium max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d03ca56fe0cf162326140aa114369b62dacb6956d731e4816b37acf5fea4d80?apiKey=d486896be9e345128b8f51543dad92f5&"
                  className="shrink-0 mt-1.5 w-6 aspect-square"
                  alt="Calendar Icon"
                />
                <span className="flex flex-col grow shrink-0 basis-0 w-fit">
                  <span className="text-s">Location</span>
                  <time className="text-lg">{location}</time>
                </span>
              </div>
            </div>
            <div className="flex gap-1 items-start mt-11 font-medium max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebbb330feb092e1387372d223c4e6cb248337003e5584b5476d35b1ed4d1bc87?apiKey=d486896be9e345128b8f51543dad92f5&"
                className="shrink-0 mt-1.5 w-6 aspect-square"
                alt="Calendar Icon"
              />
              <span className="flex flex-col grow shrink-0 basis-0 w-fit">
                <span className="text-s">Posting Date</span>
                <time className="text-lg">{postingDate}</time>
              </span>
            </div>
            <h3 className="mt-14 text-2xl font-medium max-md:mt-10">
              Description
            </h3>
            <p className="mt-5 text-base text-black text-opacity-70">
              {description}
            </p>
          </h2>
        </article>
        <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-1 font-medium text-black max-md:mt-10">
            <p className="self-center text-2xl">Rs. {price}</p>
            <button className=" rounded-full flex gap-4 px-7 py-3 mt-5 text-lg border border-black border-solid bg-zinc-100 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0db90fdea1a91a81aea6ad0d37a08f45954fc4f3b8d90833fd7e441821af6e40?apiKey=d486896be9e345128b8f51543dad92f5&"
                className="shrink-0 w-5 pt-1 -mr-6"
                alt="Chat Icon"
              />
              <span className="flex-auto">Chat with the seller</span>
            </button>
          </div>
        </aside>
      </section>
    );
  }

  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="flex gap-3 pt-10 pb-3 justify-center bg-slate-200">
        <section className="flex flex-col px-16 pt-8 pb-5 bg-white rounded-md max-w-[521px] max-md:px-5">
          <Image {...images[0]} />
          <div className="flex gap-3 px-0.5 mt-8">
            <Image {...images[1]} />
            <Image {...images[2]} />
            <div className="flex gap-2 my-auto">
              <Image {...images[3]} />
              <button>Next</button>
            </div>
          </div>
        </section>

        <div className="flex flex-col px-6 pt-5 pb-20 bg-white rounded-md max-w-[759px] max-md:px-5">
          <header className="flex gap-5 text-3xl font-medium text-black max-md:flex-wrap max-md:max-w-full">
            <h1 className="flex-auto">The Fault in Our Stars</h1>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/335cb6a41a8eca0371b3e562eba1b4a80a87c0c9ca987f269f7a3fee6bdb8cbc?apiKey=d486896be9e345128b8f51543dad92f5&"
              className="shrink-0 aspect-square w-[31px]"
              alt="Book Cover"
            />
          </header>
          <main className="self-center mt-10 w-full max-w-[628px] max-md:max-w-full">
            <UserCard
              name="Pradeep Sharma"
              location="Bengaluru"
              postingDate="03-MAR-24"
              description="Bought 5 months ago Negotiable Good condition No torn page"
              price="250.00"
            />
          </main>
        </div>
      </div>
      <section className="flex flex-col px-11 pt-10 pb-20 bg-white rounded-md max-md:px-5">
        <h2 className="self-start text-2xl font-medium text-black max-md:max-w-full">
          Related Options
        </h2>
        <div className="self-center mt-7 w-full max-w-[1115px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className={`${
                  index !== 0 ? "ml-5" : ""
                } w-3/12 max-md:ml-0 max-md:w-full`}
              >
                <Card
                  imgSrc={card.imgSrc}
                  imgAlt={card.imgAlt}
                  title={card.title}
                  author={card.author}
                  price={card.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
