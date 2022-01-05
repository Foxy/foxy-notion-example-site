import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-6 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:col-span-3">
          <h1 className="text-4xl font-medium">Contact Us</h1>
          <p className="text-gray-600 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi
            omnis beatae. Enim modi, facilis dolores, magni ab neque earum atque
            sed excepturi ad ipsam ratione laborum possimus natus vel!
          </p>
          <div className="mt-10">
            <h3 className="flex items-center">
              <MailIcon className="h-6 w-6 mr-3 text-gray-500" />
              <a href="mailto:#" className="text-lg text-gray-700">
                mail@example.com
              </a>
            </h3>

            <h3 className="mt-4 flex items-center">
              <PhoneIcon className="h-6 w-6 mr-3 text-gray-500" />
              <a href="tel:#" className="text-lg text-gray-700">
                (123)456-7890
              </a>
            </h3>
          </div>
        </div>

        <div className="mt-8 lg:col-span-4">
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
              className="object-center object-cover"
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c1dc8da1-3f9a-4094-aa05-908fa84cec2f/white_mug.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211215T192246Z&X-Amz-Expires=3600&X-Amz-Signature=74412c8088ab9116f0288c4785efdcd9564961fca45b8111d2641563a03fe0ba&X-Amz-SignedHeaders=host&x-id=GetObject"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
