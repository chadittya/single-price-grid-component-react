import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        {/* container */}
        <div className="flex justify-center items-center h-screen">
          {/* card */}
          <div className="bg-white w-[311px] xl:w-[635px] rounded-t-md shadow-[0px_6px_10px_1px_#00000024] flex flex-col">
            {/* card items*/}
            {/* item 1 */}
            <div className="px-5 xl:px-8 py-5 xl:py-8 flex flex-col gap-3">
              <h1 className="font-bold text-xl text-cCyan xl:text-[24px]">
                Join our community
              </h1>
              <h2 className="font-bold txt-[15px] text-cBrightYellow xl:text-[18px]">
                30-day, hassle-free money back guarantee
              </h2>
              <p className="text-[14px] text-cGrayishBlue xl:text-base">
                Gain access to our full library of tutorials along with expert
                code reviews. Perfect for any developers who are serious about
                honing their skills.
              </p>
            </div>
            {/* item 2 & 3 wrapper  */}
            <div className="xl:flex xl:flex-row xl:justify-between">
              {/* item 2 */}
              <div className="text-white font-bold px-5 py-5 flex flex-col gap-3 bg-[#2AB3B1] xl:w-[318px] xl:px-8 xl:py-8">
                <h1 className=" text-[18px]">Monthly Subscription</h1>
                <article>
                  <p className="text-[32px]">
                    $29 <span className="font-normal text-base">per month</span>
                  </p>
                  <p className="font-normal text-base">
                    Full access for less than $1 a day
                  </p>
                </article>
                <Button className="xl:w-[237px] xl:h-[48px]">Sign Up</Button>
              </div>
              {/* item 3  */}
              <div className="text-white font-bold px-5 py-5 flex flex-col gap-3 bg-[#34bdba] xl:w-[318px] xl:px-8 xl:py-8">
                <h1 className="text-[18px]">Why Us</h1>
                <p className="text-sm font-normal">
                  Tutorials by industry experts <br /> Peer & expert code review{" "}
                  <br />
                  Coding exercises <br /> Access to our GitHub repos <br />{" "}
                  Community forum <br />
                  Flashcard decks <br /> New videos every week
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
