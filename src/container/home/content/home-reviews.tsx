import React from "react";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";

import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";
import { FadeIn } from "@/components/ui/animations";
import { Marquee } from "@/components/magicui/marquee";
import { ReviewServices } from "@/services/reviews";
import { IDataReviewsList } from "@/services/reviews/reviews.type";
import { Avatar } from "@/components/ui/avatar/avatar";
import { SectionHeader } from "@/components/fragments/section-header";
import { HOME_REVIEW_DESCRIPTION, HOME_REVIEW_LOOK, HOME_REVIEW_TITLE, HOME_REVIEW_WRITE } from "@/constant/seo/home-page";
import { WaveBottomBgShape } from "@/components/ui/shapes";
import Link from "@/components/ui/link";

export const HomeReviews = () => {
  const { ref } = useTrackEnterSection({
    envetKey: "enter_home_reviews",
    featureKey: "Home Page",
  });

  const data = ReviewServices.getList.call();

  // Split reviews into two groups
  const firstHalf = data.reviews
    .slice(0, Math.ceil(data.reviews.length / 2))
    .filter(item => !item.name.includes("Chairani"));
  const secondHalf = data.reviews.slice(Math.ceil(data.reviews.length / 2));

  return (
    <section ref={ref}>
      <div className="bg-primary py-28 relative overflow-hidden">
        <div className="container px-4">
          <FadeIn delay={0.2}>
            <SectionHeader
              classNames="mb-10 md:mb-16"
              title={HOME_REVIEW_TITLE}
              description={HOME_REVIEW_DESCRIPTION}
            />
          </FadeIn>
          <div className="-mx-2 md:mx-0 relative">
            <FadeIn delay={0.2}>
              {/* First marquee - moving right, slightly faster */}
              <Marquee pauseOnHover repeat={2} speed={130} gap={1.5}>
                {firstHalf.map((review, index) => (
                  <ReviewCard key={review.id || `first-${index}`} review={review} />
                ))}
              </Marquee>
            </FadeIn>
            <FadeIn delay={0.2}>
              {/* Second marquee - moving left (reverse), slightly slower */}
              <Marquee reverse pauseOnHover repeat={2} speed={140} gap={1.5}>
                {secondHalf.map((review, index) => (
                  <ReviewCard key={review.id || `second-${index}`} review={review} />
                ))}
              </Marquee>
            </FadeIn>
            <div className="pointer-events-none absolute inset-y-0 -left-1 w-8 md:w-1/12 bg-gradient-to-r from-primary"></div>
            <div className="pointer-events-none absolute inset-y-0 -right-1 w-8 md:w-1/12 bg-gradient-to-l from-primary"></div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            <Link
              href={HOME_REVIEW_LOOK}
              target="_blank"
              className={clsx(
                "inline-flex items-center justify-center rounded-md py-4 px-10 text-sm font-semibold",
                "text-secondary border border-secondary shadow transition-all duration-500",
                "hover:shadow-lg",
              )}
            >
              <Icon icon="material-symbols:arrow-forward-rounded" className="mr-2 text-lg w-5 h-5" />
              Lihat Semua Review
            </Link>
            <Link
              href={HOME_REVIEW_WRITE}
              target="_blank"
              className={clsx(
                "inline-flex items-center justify-center rounded-md py-4 px-10 text-sm font-semibold",
                "text-secondary border border-secondary shadow transition-all duration-500",
                "hover:shadow-lg",
              )}
            >
              <Icon icon="material-symbols:rate-review-outline" className="mr-2 text-lg w-5 h-5" />
              Beri Review Anda
            </Link>
          </div>
        </div>
      </div>
      <WaveBottomBgShape currentSectionColor="hsl(38 100% 55%)" nextSectionColor="#fff" />
    </section>
  );
};

const ReviewCard = ({ review }: { review: IDataReviewsList }) => {
  return (
    <div className="w-[320px] bg-white rounded-lg shadow-lg p-6 my-4 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <Avatar
          imageUrl={review.avatar}
          name={review.name}
          size={48}
          className="shrink-0"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{review.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <Icon
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? "text-primary fill-primary" : "text-gray-300"
                    }`}
                  icon="material-symbols:star-rounded"
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">{review.date}</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 text-sm line-clamp-4">{review.text}</p>
    </div>
  );
};