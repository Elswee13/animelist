"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { fetchAnime } from "@/app/action";

function LoadMore() {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchAnime(2);
    }
  }, [InView]);

  return (
    <>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
