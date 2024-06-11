const Book = ({ imageSrc, title, author, altText }) => (
  <article className="flex flex-col grow p-3 text-center items-center bg-white rounded-md shadow-md">
    <img
      loading="lazy"
      src={imageSrc}
      alt={altText}
      className="max-w-full aspect-[0.67] w-[141px]"
    />
    <h3 className="mt-3 text-base font-semibold leading-8 text-cyan-900 self-stretch">
      {title}
    </h3>
    <p className="mt-0 mb-1 text-sm leading-8 text-neutral-400">{author}</p>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba581ee90ca64c35d69eaed7f1fdb26a767ceb06f08ccf84d00da144711276e0?apiKey=d486896be9e345128b8f51543dad92f5&"
      alt=""
      className="mt-0 w-24 aspect-[6.67]"
    />
  </article>
);

function ShowCase() {
  const books = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4646cedfeba4c19bd21a3b15bd226b482f36950cf9adbe8cf7c331fd5d915c03?apiKey=d486896be9e345128b8f51543dad92f5&",
      title: "The Mind Connection",
      author: "Joyce Meyer",
      altText: "Cover of The Mind Connection",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c84f23c1eb117c1b0e9ddd34a1e66641ef0071b5a3eb54fb165ea90b322b845b?apiKey=d486896be9e345128b8f51543dad92f5&",
      title: "The Road to Recognition",
      author: "Seth Price/ Barry Feldman",
      altText: "Cover of The Road to Recognition",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1e76ba16e4e2ab61368cf396a7cef45eb632bd89295464afea9625e45490cfe0?apiKey=d486896be9e345128b8f51543dad92f5&",
      title: "Battlefield of the mind",
      author: "Joyce Meyer",
      altText: "Cover of Battlefield of the mind",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9c742356b2107163c71151d43e54a4da2eaea79d3ccee24fa2fecca73f7eecea?apiKey=d486896be9e345128b8f51543dad92f5&",
      title: "The Road to Recognition",
      author: "Seth Price/ Barry Feldman",
      altText: "Cover of The Road to Recognition",
    },
  ];

  return (
    <main className="flex flex-col items-center px-5 pt-20 pb-20 ">
      <header className="text-3xl font-bold tracking-widest text-center text-cyan-900">
        New Added Books
      </header>
      <section className="mt-3 text-lg tracking-widest leading-8 text-center text-stone-500 max-md:max-w-full">
        1000+ books are published by different authors everyday.
      </section>
      <nav className="flex gap-2 mt-7 text-base font-bold tracking-wide text-right  text-red-500 capitalize">
        <a href="https://books.example.com/all-products" className="grow">
          View all products
        </a>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9350a1e9f43d0056692c9a294ce7da98a5a1e5682879642ce2cbf7cd0f39587a?apiKey=d486896be9e345128b8f51543dad92f5&"
          alt=""
          className="shrink-0 self-start w-3.5 aspect-[1.75] mt-2.5 fill-red-500"
        />
      </nav>
      <section className="self-stretch mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {books.map((book, index) => (
            <Book key={index} {...book} />
          ))}
        </div>
      </section>
      <nav className="flex gap-3 items-center mt-12 max-md:mt-10">
        <button
          className="flex flex-col justify-center self-stretch p-3.5 rounded-full border border-red-500 border-solid"
          aria-label="Active page"
        >
          <div className="shrink-0 bg-red-500 rounded-full h-[13px] w-[13px]" />
        </button>
        <button
          className="shrink-0 self-stretch my-auto rounded-full bg-stone-300 h-[13px] w-[13px]"
          aria-label="Page 2"
        ></button>
        <button
          className="shrink-0 self-stretch my-auto rounded-full bg-stone-300 h-[13px] w-[13px]"
          aria-label="Page 3"
        ></button>
        <button
          className="shrink-0 self-stretch my-auto rounded-full bg-stone-300 h-[13px] w-[13px]"
          aria-label="Page 4"
        ></button>
      </nav>
    </main>
  );
}

export default ShowCase;
