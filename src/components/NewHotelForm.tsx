"use client";
import { useRef, useState } from "react";
import React from "react";
import { storage } from "../../firebase";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const style = {
  field: `"relative mb-4"`,
  label: `leading-7 text-sm text-gray-600`,
  formSection: `lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 my-3 flex flex-col  w-full mt-10 md:mt-0`,
  formHeading: `"text-gray-900 text-lg font-medium title-font mb-5`,
  input: `w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`,
};

function NewHotelForm(props: any) {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    const promises: any[] = [];
    images.map((image: any) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((urls) => {
              setUrls((prevState): any => [...prevState, urls]);
            });
        }
      );
    });

    Promise.all(promises)
      .then(() => console.log("All images uploaded"))
      .catch((err) => console.log(err));
  };

  const handleChange = (e: any) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage: any = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState): any => [...prevState, newImage]);
    }
  };

  console.log("image: ", images);
  console.log("urls: ", urls);
  const titleInputRef: any = useRef();
  const brandInputRef: any = useRef();
  const categoryInputRef: any = useRef();
  const descriptionInputRef: any = useRef();
  const lowestPriceInputRef: any = useRef();
  const taxPriceInputRef: any = useRef();
  const phoneNumberInputRef: any = useRef();
  const emailInputRef: any = useRef();
  const websiteInputRef: any = useRef();
  const addressInputRef: any = useRef();
  const countryInputRef: any = useRef();
  const postalcodeInputRef: any = useRef();
  const provinceInputRef: any = useRef();
  const cityInputRef: any = useRef();
  const checkinhrInputRef: any = useRef();
  const checkouthrInputRef: any = useRef();
  const policiesInputRef: any = useRef();

  function submitHandler(event: any) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredBrand = brandInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredLowestPrice = lowestPriceInputRef.current.value;
    const enteredTaxPrice = taxPriceInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredWebsite = websiteInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredPostalCode = postalcodeInputRef.current.value;
    const enteredProvince = provinceInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredCheckinHour = checkinhrInputRef.current.value;
    const enteredCheckoutHour = checkouthrInputRef.current.value;
    const enteredPolicies = policiesInputRef.current.value;
    const enteredImages = urls;

    const hotelData = {
      title: enteredTitle,
      brand: enteredBrand,
      category: enteredCategory,
      description: enteredDescription,
      lowestPrice: enteredLowestPrice,
      taxPrice: enteredTaxPrice,
      phoneNumber: enteredPhoneNumber,
      email: enteredEmail,
      website: enteredWebsite,
      address: enteredAddress,
      country: enteredCountry,
      postalcode: enteredPostalCode,
      province: enteredProvince,
      city: enteredCity,
      checkinhour: enteredCheckinHour,
      checkouthour: enteredCheckoutHour,
      policies: enteredPolicies,
      images: enteredImages,
    };

    props.onAddHotel(hotelData);
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        {/* <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        /> */}
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Add Hotel Form{" "}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        onSubmit={submitHandler}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="bg-white shadow-md p-10 rounded-lg my-4">
          <div className="mb-10">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="title"
                  id="title"
                  ref={titleInputRef}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Brand
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  ref={brandInputRef}
                  name="brand"
                  id="brand"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="category"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2.5">
                <select
                  id="category"
                  ref={categoryInputRef}
                  name="category"
                  autoComplete="category-name"
                  className="block w-full rounded-md border-0 py-3 px-3.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value=" Small Hotel"> Small Hotel</option>
                  <option value=" Downtown Hotel"> Downtown Hotel</option>
                  <option value=" Sub-Urban Hotel"> Sub-Urban Hotel</option>
                  <option value=" Resort Hotel"> Resort Hotel</option>
                  <option value=" Airport Hotel"> Airport Hotel</option>
                  <option value="  Botique Hotel"> Botique Hotel</option>
                  <option value=" Transient Hotel"> Transient Hotel</option>
                  <option value=" Casino Hotel"> Casino Hotel</option>
                  <option value=" Commercial/Business Hotel">
                    Commercial/Business Hotel
                  </option>
                  <option value=" Suite Hotel"> Suite Hotel</option>
                  <option value=" Residential Hotel"> Residential Hotel</option>
                  <option value=" Bed & Breakfast Hotel">
                    Bed & Breakfast Hotel
                  </option>
                  <option value=" Convention Hotel"> Convention Hotel</option>
                  <option value=" Gastro Hotel"> Gastro Hotel</option>
                  <option value=" Pop-up Hotel"> Pop-up Hotel</option>
                  <option value=" Capsule Hotel"> Capsule Hotel</option>
                  <option value=" Apart Hotel"> Apart Hotel</option>
                  <option value=" Hostel"> Hostel</option>
                  <option value=" Extended-Stay Hotel">
                    Extended-Stay Hotel
                  </option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2.5">
                <textarea
                  name="description"
                  id="description"
                  ref={descriptionInputRef}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg p-10 rounded-lg my-4">
          <div className="mb-10">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Prices
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="lowestPrice"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Lowest Price
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>$</option>
                  </select>
                </div>
                <input
                  type="number"
                  ref={lowestPriceInputRef}
                  name="lowestPrice"
                  id="lowestPrice"
                  autoComplete="lowestPrice"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="tax"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Tax & Charges{" "}
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>$</option>
                  </select>
                </div>
                <input
                  type="number"
                  ref={taxPriceInputRef}
                  name="tax"
                  id="tax"
                  autoComplete="tax"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg p-10 rounded-lg my-4">
          <div className="mb-10">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Contact
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  ref={emailInputRef}
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  ref={phoneNumberInputRef}
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="phoneNumber"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="website"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Website
              </label>
              <div className="mt-2.5">
                <input
                  type="url"
                  ref={websiteInputRef}
                  name="website"
                  id="website"
                  autoComplete="website"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg p-10 rounded-lg my-4">
          <div className="mb-10">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Address Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  ref={addressInputRef}
                  name="address"
                  id="address"
                  autoComplete="address"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  ref={countryInputRef}
                  name="country"
                  id="country"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>{" "}
            <div>
              <label
                htmlFor="province"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Province
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  ref={provinceInputRef}
                  name="province"
                  id="province"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="postalcode"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Postal Code
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  ref={postalcodeInputRef}
                  name="postalcode"
                  id="postalcode"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>{" "}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                City{" "}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  ref={cityInputRef}
                  name="city"
                  id="city"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="bg-white shadow-lg p-10 rounded-lg my-4">
          <div className="mb-10">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Policies
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="checkinhr"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Check In Hour{" "}
              </label>
              <div className="mt-2.5">
                <input
                  ref={checkinhrInputRef}
                  type="time"
                  name="checkinhr"
                  id="checkinhr"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>{" "}
            <div>
              <label
                htmlFor="checkouthr"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Check Out Hour{" "}
              </label>
              <div className="mt-2.5">
                <input
                  type="time"
                  ref={checkouthrInputRef}
                  name="checkouthr"
                  id="checkouthr"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>{" "}
            <div className="sm:col-span-2">
              <label
                htmlFor="policies"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Additional Policies
              </label>
              <div className="mt-2.5">
                <textarea
                  name="policies"
                  ref={policiesInputRef}
                  id="policies"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg p-10 rounded-lg my-4">
          <div className="mb-10">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Images
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="image"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        multiple
                        id="image"
                        name="image"
                        type="file"
                        onChange={handleChange}
                        className="sr-only"
                      />
                    </label>

                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>

              <button
                className="text-white bg-indigo-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-sm"
                onClick={handleUpload}
              >
                Upload
              </button>
              <progress
                value={progress}
                max="100"
                className="rounded-sm ml-7"
              />

              {/* {urls.map((url, i) => (
                <div key={i}>
                  <a href={url} target="_blank">
                    {url}
                  </a>
                </div>
              ))} */}
              {urls.map((url, i) => (
                <span key={i} className="flex-row">
                  <img
                    key={i}
                    style={{ width: "100px" }}
                    src={url || "http://via.placeholder.com/300"}
                    alt="firebase-image"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewHotelForm;
