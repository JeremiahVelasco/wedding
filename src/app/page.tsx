import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Head from "next/head";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-white"
      // style={{
      //   backgroundImage: "url('/IMG_1578.JPG')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundAttachment: "fixed",
      // }}
    >
      <Head>
        <title>You&aposre Invited! October 26, 2025</title>
      </Head>
      {/* Main Invitation Section */}
      <section
        id="invitation"
        className="min-h-screen flex items-center justify-center px-6 py-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="font-serif text-6xl md:text-8xl font-medium text-blue-900 mb-4">
              PAMELA
            </h1>
            <p className="font-script font-bold text-3xl md:text-4xl text-blue-950 mb-4">
              and
            </p>
            <h1 className="font-serif text-6xl md:text-8xl font-medium text-blue-900">
              JEREMIAH
            </h1>
          </div>

          <div className="w-24 h-px bg-gray-400 mx-auto mb-12"></div>

          <div className="max-w-2xl text-black mx-auto text-lg md:text-xl leading-relaxed mb-12">
            <p className="mb-8 font-light tracking-wide">
              INVITE YOU TO CELEBRATE THEIR LOVE AND
              <br />
              PARTNERSHIP AS THEY JOIN IN MARRIAGE ON
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-medium text-blue-900 mb-8">
              26.10.2025
            </h2>

            <p className="text-lg font-light tracking-wide mb-12">
              AT 2PM IN THE AFTERNOON
            </p>

            <div className="text-lg font-medium tracking-wide">
              <p className="mb-2">THE CHAPEL COMPANY</p>
              <p className="text-gray-600 font-light">
                29404 RANGE RD 52, WATER VALLEY, AB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="min-h-screen py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center text-blue-900 mb-16">
            <h2 className="font-script text-5xl md:text-6xl font-bold mb-4">
              The <span className="font-serif tracking-tighter">DETAILS</span>
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {/* Reception */}
            <div>
              <h3 className="font-serif text-3xl font-medium mb-6 text-blue-900">
                RECEPTION
              </h3>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  PLEASE JOIN US FOR AN EVENING OF DINNER AND DANCING. HAPPY
                  HOUR BEGINS AT 3:30 PM FOLLOWED BY DINNER AT 5 PM AT BOUTIQUE
                  HALL (282252 HORSE CREEK RD, ROCKY VIEW COUNTY, AB T4C 1A1).
                </p>
                <p className="text-sm text-gray-600">
                  THE RECEPTION VENUE IS A 13 MINUTE DRIVE FROM THE CHAPEL. 45
                  MINUTES DRIVE FROM CALGARY.
                </p>
              </div>
            </div>

            {/* Dress Code */}
            <div>
              <h3 className="font-serif text-3xl font-medium mb-6 text-blue-900">
                DRESS CODE
              </h3>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p>
                  FORMAL ATTIRE: WE SUGGEST MEN WEAR A SUIT IN BLACK AND WOMEN
                  WEAR A COCKTAIL DRESS, KNEE, OR FLOOR-LENGTH DRESS OF THEIR
                  CHOICE IN MIDNIGHT BLUE.
                </p>
              </div>
              <div className="flex space-x-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#262757]"></div>
                <div className="w-12 h-12 rounded-full bg-[#013567]"></div>
                <div className="w-12 h-12 rounded-full bg-[#110d4b]"></div>
              </div>
            </div>
          </div>

          {/* Order of the Day */}
          <div className="mt-16">
            <h3 className="font-serif text-2xl font-semibold mb-8 text-blue-900 text-center">
              ORDER OF THE DAY
            </h3>
            <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-12 mb-8 text-blue-900">
              <div className="text-center mb-8 md:mb-0">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-4xl">⛪</span>
                </div>
                <p className="text-sm font-medium">2PM</p>
              </div>
              <div className="text-center mb-8 md:mb-0">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">📸</span>
                </div>
                <p className="text-sm font-medium">3PM</p>
              </div>
              <div className="text-center mb-8 md:mb-0">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">🥂</span>
                </div>
                <p className="text-sm font-medium">3:30PM</p>
              </div>
              <div className="text-center mb-8 md:mb-0">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">🍽️</span>
                </div>
                <p className="text-sm font-medium">5PM</p>
              </div>
              <div className="text-center mb-8 md:mb-0">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">💃</span>
                </div>
                <p className="text-sm font-medium">6PM</p>
              </div>
              <div className="text-center mb-8 md:mb-0">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">🚙</span>
                </div>
                <p className="text-sm font-medium">9PM</p>
              </div>
            </div>
            <div className="w-full h-px bg-gray-300 mb-8"></div>
          </div>

          {/* Gifts */}
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-medium mb-6 text-blue-900">
              GIFTS
            </h3>
            <p className="text-gray-700 leading-relaxed text-md">
              YOUR PRESENCE ON OUR SPECIAL DAY IS THE GREATEST GIFT WE COULD ASK
              FOR. BUT IF YOU FEEL INCLINED TO HONOR US WITH SOMETHING MORE. A
              MONETARY GIFT TO HELP US START OUR JOURNEY AS A MARRIED COUPLE
              WOULD BE SINCERELY APPRECIATED.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Party Section */}
      <section id="entourage" className="min-h-screen py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-blue-900 mb-16">
            <h2 className="font-script text-5xl md:text-6xl font-bold mb-4">
              The <span className="font-serif tracking-tighter">ENTOURAGE</span>
            </h2>
          </div>

          {/* Officiant */}
          <div className="text-center">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-blue-900">
              OFFICIANT
            </h3>
            <p className="text-gray-700 text-lg">PASTOR GORDON MILLER</p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 mt-12 gap-12 mb-16">
            {/* Principal Sponsors */}
            <div className="text-center lg:col-span-2">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-blue-900">
                PRINCIPAL SPONSORS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-lg">
                <p>RODOLFO FLORES JR. - IMELDA DEL ROSARIO</p>
                <p>ROCARSON PAJARILLO - MARY JANE PAJARILLO</p>
                <p>ARIEL MANLONGAT - LILIBETH QUIBA</p>
                <p>NOEL SARMIENTO - CAROLINE D. SARMIENTO</p>
                <p>JOSEPH ALBERT VILLANUEVA - CHARITO D. VILLANUEVA</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            {/* Left Side */}
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-blue-900">
                  PARENTS OF THE BRIDE
                </h3>
                <p className="text-gray-700 text-lg">RIZALYN JOBLE</p>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-blue-900">
                  MAID OF HONOR
                </h3>
                <p className="text-gray-700 text-lg">ERICA MAE SHABADO</p>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-blue-900">
                  BRIDESMAIDS
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>HANNA TRICIA JOBLE</p>
                  <p>PRISHA JEROLD FLORES</p>
                  <p>IRISH JEHAN GANDIA</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-blue-900">
                  PARENTS OF THE GROOM
                </h3>
                <div className="space-y-1 text-gray-700 text-lg">
                  <p>DIVINA DALIGUES VELASCO</p>
                  <p>HERMINIGILDO MONTEMAYOR VELASCO</p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-blue-900">
                  BEST MAN
                </h3>
                <p className="text-gray-700 text-lg">HANS RUZZEL JOBLE</p>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-blue-900">
                  GROOMSMEN
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>MARK NEIL DEL ROSARIO</p>
                  <p>FRENZ LESTHER DEL ROSARIO</p>
                  <p>ALLEN KIT TEMBREZA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-blue-900">
              RING BEARER
            </h3>
            <p className="text-gray-700 text-lg">ROD JADEN FLORES</p>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-700 mt-20 text-lg leading-relaxed mb-8">
              THANK YOU FOR YOUR LOVE AND SUPPORT AS
              <br />
              WE BEGIN OUR LIFE TOGETHER.
            </p>
          </div>
        </div>
      </section>

      {/* RSVP QR */}
      <section id="rsvp" className="h-full py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-script text-5xl md:text-6xl font-bold mb-4 text-blue-900">
              Kindly <span className="font-serif tracking-tighter">RSVP</span>
            </h2>
            <p className="text-gray-700 text-3xl font-serif leading-relaxed mb-8">
              by September 1st, 2025
            </p>
            <div className="flex justify-center">
              <Image src="/rsvp.png" alt="RSVP QR" width={300} height={300} />
            </div>
            <p className="text-gray-700 mt-10 text-3xl font-serif leading-relaxed mb-8">
              Please scan the QR code to RSVP.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-24">
        <h2 className="text-center mb-10 font-serif tracking-tighter text-5xl md:text-6xl font-bold text-blue-900">
          FAQs
        </h2>
        <div className="max-w-4xl mx-auto font-serif">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold">
                Is there parking available?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Yes, there will be parking available for the ceremony venue and
                the reception venue. For the ceremony, there will be parking in
                front of the chapel and some on the left side of the chapel. For
                the reception venue, there will be parking available in front of
                the hall and if it won&apos;t be enough, some cars can park
                across the street from the venue.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold">
                What&apos;s the weather like at the venue?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Fall in Alberta is usually cooler throughout the day and night,
                so we recommend wearing a coat or jacket that will provide you
                with warmth especially when outdoors. There will be coat racks
                available for you to hang your coats in both the ceremony and
                reception venues.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold">
                What&apos;s the schedule for the day?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                The ceremony will start at 2 pm. Everyone will travel to the
                reception afterwards and will head to the outdoor patio of the
                reception venue for family and group photos. Followed by
                cocktail hour and reception inside Dartique Hall.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold">
                Will your wedding be indoors or outdoors?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Our afternoon ceremony will be indoors in the chapel, as well as
                cocktail hour and the reception will take place indoors of the
                hall. However, group and family photos will be taken after the
                ceremony in the outdoor patio of the reception venue.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl font-semibold">
                Am I allowed to bring a plus-one?{" "}
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                We are so excited to celebrate with you! Unfortunately, due to a
                limited venue capacity, we simply can’t afford for all of our
                lovely guests to bring a guest of their own. Thank you so much
                for understanding!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl font-semibold">
                Can I RSVP online or do I have to mail in an RSVP card?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                We provided a QR code in the invitation for everyone to RSVP. We
                recommend everybody to rsvp online until September 1st of 2025
                for final numbers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-xl font-semibold">
                Will there be an open bar?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Yes, there will be an open bar for guests to enjoy throughout
                cocktail hour and the reception courtesy of the groom and the
                bride. There will be non-alcoholic options offered for
                non-drinkers as well.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-xl font-semibold">
                Am I allowed to take photos at your wedding?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Of course, we would like to keep as many memories as we can!
                However, we kindly ask that you refrain from taking photos or
                videos of the ceremony part of the wedding as we want our guests
                to truly be in the moment with us during this special time of
                the day. There will be a professional photographer and
                videographer on site to capture the moment and we are more than
                happy to share the photos with everybody afterwards.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="font-script text-4xl font-semibold mb-4 text-white">
            Pamela & Jeremiah
          </p>
          <p className="text-gray-400">October 26, 2025 • Water Valley, AB</p>
        </div>
      </footer>
    </main>
  );
}
