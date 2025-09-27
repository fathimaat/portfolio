import React from 'react';

export function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Be_Vietnam'] font-semibold text-[32px] md:text-[40px] leading-[79%] mb-8 md:mb-16">
          ABOUT ME
        </h2>
        <div className="space-y-6 md:space-y-8 font-['Be_Vietnam'] font-normal text-[24px] md:text-[40px] leading-[120%] md:leading-[108%] max-w-4xl">
          <p>
            Born in <span className="font-bold tracking-[-0.06em]">Kerala, India</span>, I have grown up experiencing <span className="font-bold tracking-[-0.06em]">diverse cultures and perspectives</span>.
          </p>
          <p>
            Currently pursuing <span className="font-bold tracking-[-0.06em]">Computer Science</span> with a focus on <span className="font-bold tracking-[-0.06em]">software development</span>, I am dedicated to building a strong foundation for a <span className="font-bold tracking-[-0.06em]">career in the tech industry</span>.
          </p>
          <p>
            I enjoy <span className="font-bold tracking-[-0.06em]">coding</span>, experimenting with <span className="font-bold tracking-[-0.06em]">new technologies and gadgets</span>, exploring <span className="font-bold tracking-[-0.06em]">artificial intelligence</span>, and working on <span className="font-bold tracking-[-0.06em]">creative projects</span>.
          </p>
        </div>
      </div>
    </section>
  );
}