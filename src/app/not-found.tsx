'use client';

import { Button } from "@heroui/react";
import Lottie from "lottie-react";
import Link from "next/link";
import pageNotFoundAnimation from "@/public/lottie/page_not_found.json";

export default function NotFound() {
  return (
      <div className="light min-h-screen flex items-center justify-center bg-white px-4 py-8">
          <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">
              {/* Lottie Animation */}
              <div className="w-full max-w-xs sm:max-w-md mx-auto">
                  <Lottie
                      animationData={pageNotFoundAnimation}
                      loop={true}
                      autoplay={true}
                      className="w-full h-auto"
                  />
              </div>

              {/* Error Content */}
              <div className="space-y-4 md:space-y-6">
                  <div className="space-y-2 md:space-y-3">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">404</h1>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
                          Page Not Found
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-sm md:max-w-md mx-auto leading-relaxed px-4">
                          The page you&apos;re looking for doesn&apos;t exist or has been moved.
                          Let&apos;s get you back on track!
                      </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
                      <Button
                          as={Link}
                          href="/"
                          color="primary"
                          variant="solid"
                          size="md"
                          className="w-full sm:w-auto min-w-[140px] md:min-w-[160px] font-semibold text-sm md:text-base"
                      >
                          Go Home
                      </Button>
                      <Button
                          as={Link}
                          href="#"
                          color="primary"
                          variant="bordered"
                          size="md"
                          className="w-full sm:w-auto min-w-[140px] md:min-w-[160px] font-semibold text-sm md:text-base"
                          onPress={() => window.history.back()}
                      >
                          Go Back
                      </Button>
                  </div>
              </div>

              {/* Additional Help */}
              <div className="pt-6 md:pt-8 border-t border-gray-200">
                  <p className="text-xs sm:text-sm text-gray-500 px-4">
                      Still having trouble?{' '}
                      <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer underline-offset-4 hover:underline transition-all">
              Contact Support
            </span>
                  </p>
              </div>
          </div>
      </div>
  );
}
