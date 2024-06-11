function Article({ imageSrc, date, title, altText }) {
  return (
    <article className="flex flex-col w-[33%] max-md:w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={altText}
        className="w-full aspect-[1.49] max-md:max-w-full"
      />
      <div className="flex flex-col self-start mt-8 ml-6 max-md:ml-2.5">
        <time className="text-base tracking-wider text-yellow-800">{date}</time>
        <h2 className="mt-6 text-2xl font-bold leading-10 text-cyan-900">
          {title}
        </h2>
      </div>
    </article>
  );
}

function Divider() {
  return <div className="shrink-0 max-w-full h-px bg-stone-300 w-[419px]" />;
}

function MyComponent() {
  const articles = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/600e48d8f1a5d240f50ce22f00bdc126a95733328f15beaf74223a1f359bf5ee?apiKey=d486896be9e345128b8f51543dad92f5&",
      date: "2 aug, 2021",
      title: "Explore New Reads",
      altText: "Image related to exploring new reads",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ebee55102b17d8d323411cdec5d422d689b0d99f4864c8a60591e0ba1b28e88b?apiKey=d486896be9e345128b8f51543dad92f5&",
      date: "2 aug, 2021",
      title: "Sell your Books and earn",
      altText: "Image related to selling books",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/23e2be56aabe306f7809eba25b377f2e1eb726d03cc42461f0535d8f13d56b65?apiKey=d486896be9e345128b8f51543dad92f5&",
      date: "2 aug, 2021",
      title: "Buy books from fellow user",
      altText: "Image related to buying books",
    },
  ];

  return (
    <section className="flex flex-col py-16 bg-gray-200 bg-opacity-50 ">
      <header className="flex gap-5 mt-3.5 ml-9 max-w-full text-5xl text-center text-cyan-900 capitalize w-[937px] max-md:flex-wrap max-md:text-4xl">
        <div className="shrink-0 my-auto max-w-full h-px bg-neutral-200 w-[379px]" />
        <h1 className="flex-auto max-md:max-w-full max-md:text-4xl">
          Explore SecondStory
        </h1>
      </header>

      <div className="px-5 mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {articles.map((article, index) => (
            <Article
              key={index}
              imageSrc={article.imageSrc}
              date={article.date}
              title={article.title}
              altText={article.altText}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-5 justify-between self-center px-5 mt-20 w-full max-w-[1358px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <Divider />
        <Divider />
        <Divider />
      </div>

      <div className="flex gap-5 self-center py-2 pr-7 pl-14 mt-24 text-base font-bold tracking-widest leading-9 text-center text-cyan-900 uppercase border border-solid border-stone-600y max-md:px-5 max-md:mt-10">
        <div className="">Explore all</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/74e74c3113118687ee22c2ecc4f6ffdf6107efca4cdf50bd4742c1d0c016e95e?apiKey=d486896be9e345128b8f51543dad92f5&"
          alt=""
          className="shrink-0 my-auto aspect-[1.45] fill-black w-[13px]"
        />
      </div>
    </section>
  );
}

export default MyComponent;
