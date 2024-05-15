const Projects = () => {
  return (
    <section>
      <div>
        <p>Projects</p>
      </div>
      <div>
        <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
          <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                alt=""
              />
            </a>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-medium leading-tight text-black">
                Card title
              </h5>
              <p class="mb-4 text-base text-black">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
