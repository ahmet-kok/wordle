import Tabs from "../../../components/headlessui/Tabs";
import Info from "../../../components/headlessui/Info";

function Lab() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              <div className="pt-6">
                
                <dd className="mt-2 pr-12" id="faq-0">
                  <p className="text-base text-gray-500">
                    I don't know, but the flag is a big plus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quas cupiditate
                    laboriosam fugiat.
                  </p>
                </dd>
              </div>
              <div className="pt-6">
                
                <dd className="mt-2 pr-12" id="faq-1">
                  <p className="text-base text-gray-500">
                    You boil the hell out of it. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Magnam aut tempora vitae odio
                    inventore fuga aliquam nostrum quod porro. Delectus quia
                    facere id sequi expedita natus.
                  </p>
                </dd>
              </div>
              <div className="pt-6">
                <Tabs
                  className="mx-auto w-full rounded-2xl  p-2"
                />
              </div>
              <div className="pt-6">
                <Info 
                  className="mx-auto w-full
                   rounded-2xl  p-2"
                />
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lab;
