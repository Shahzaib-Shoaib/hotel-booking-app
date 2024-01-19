"use client";
import { useRef, useState } from "react";
import React from "react";
import { storage } from "../../firebase";

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

  const handleChange = (e: any) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage: any = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState): any => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
    const promises: any[] = [];
    images.map((image: any) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
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
      .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));
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
  const streetInputRef: any = useRef();
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
    const enteredStreet = streetInputRef.current.value;
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
      street: enteredStreet,
      checkinhour: enteredCheckinHour,
      checkouthour: enteredCheckoutHour,
      policies: enteredPolicies,
      images: enteredImages,
    };

    props.onAddHotel(hotelData);
    console.log(hotelData, "fsgf");
  }

  return (
    <>
      {/* <div>
        <br />
        <input type="file" multiple onChange={handleChange} />
        <button onClick={handleUpload}>upload</button>
        <br />
        {urls.map((url, i) => (
          <div key={i}>
            <a href={url} target="_blank">
              {url}
            </a>
          </div>
        ))}
        <br />
        {urls.map((url, i) => (
          <img
            key={i}
            style={{ width: "500px" }}
            src={url || "http://via.placeholder.com/300"}
            alt="firebase-image"
          />
        ))}
      </div> */}

      <form action="" onSubmit={submitHandler}>
        <div className={style.formSection}>
          <h2 className={style.formHeading}>About</h2>
          <div className={style.field}>
            <label className={style.label}>Title</label>
            <input
              type="text"
              // required
              id="title"
              ref={titleInputRef}
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>Brand</label>
            <input
              type="text"
              // required
              id="brand"
              ref={brandInputRef}
              className={style.input}
            />
          </div>

          <div className={style.field}>
            <label className={style.label}>Category</label>
            <br />

            <select
              ref={categoryInputRef}
              id="category"
              className="rounded p-2 mt-1"
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
                {" "}
                Commercial/Business Hotel
              </option>
              <option value=" Suite Hotel"> Suite Hotel</option>
              <option value=" Residential Hotel"> Residential Hotel</option>
              <option value=" Bed & Breakfast Hotel">
                {" "}
                Bed & Breakfast Hotel
              </option>
              <option value=" Convention Hotel"> Convention Hotel</option>
              <option value=" Gastro Hotel"> Gastro Hotel</option>
              <option value=" Pop-up Hotel"> Pop-up Hotel</option>
              <option value=" Capsule Hotel"> Capsule Hotel</option>
              <option value=" Apart Hotel"> Apart Hotel</option>
              <option value=" Hostel"> Hostel</option>
              <option value=" Extended-Stay Hotel"> Extended-Stay Hotel</option>
            </select>
          </div>
          <div className={style.field}>
            <label className={style.label}>Description</label>
            <textarea
              // required
              id="description"
              ref={descriptionInputRef}
              className={style.input}
            />
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------ */}

        <div className={style.formSection}>
          <h2 className={style.formHeading}>Prices</h2>
          <div className={style.field}>
            <label className={style.label}>Lowest Price</label>
            <input
              type="number"
              // required
              placeholder="$"
              id="lowestPrice"
              ref={lowestPriceInputRef}
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>Tax & Charges</label>
            <input
              type="number"
              // required
              placeholder="$"
              id="tax"
              ref={taxPriceInputRef}
              className={style.input}
            />
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------ */}

        <div className={style.formSection}>
          <h2 className={style.formHeading}>Contact</h2>
          <div className={style.field}>
            <label className={style.label}>Phone Number</label>
            <input
              type="tel"
              // required
              id="phoneNumber"
              ref={phoneNumberInputRef}
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>Email</label>
            <input
              type="email"
              // required
              id="email"
              ref={emailInputRef}
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>Website</label>
            <input
              type="url"
              // required
              id="website"
              ref={websiteInputRef}
              className={style.input}
            />
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------ */}

        <div className={style.formSection}>
          <h2 className={style.formHeading}>Address</h2>
          <div className={style.field}>
            <label className={style.label}>Address Line</label>
            <input
              type="text"
              // required
              id="address"
              ref={addressInputRef}
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>Country</label>
            <input
              type="text"
              // required
              id="country"
              ref={countryInputRef}
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>Zip/Postal Code</label>
            <input
              type="number"
              // required
              id="postalcode"
              ref={postalcodeInputRef}
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>State/ Region/ Province</label>
            <input
              type="text"
              // required
              id="province"
              ref={provinceInputRef}
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>City</label>
            <input
              type="text"
              // required
              id="city"
              ref={cityInputRef}
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>Street</label>
            <input
              type="text"
              // required
              id="street"
              ref={streetInputRef}
              className={style.input}
            />
          </div>
        </div>

        <div className={style.formSection}>
          <h2 className={style.formHeading}>Policies & Rules</h2>
          <div className={style.field}>
            <label className={style.label}>Check-In Hour</label>
            <input
              type="time"
              // required
              id="checkinhr"
              ref={checkinhrInputRef}
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>Check-Out Hour</label>
            <input
              type="time"
              // required
              id="checkouthr"
              ref={checkouthrInputRef}
              className={style.input}
            />
          </div>
          <div className={style.field}>
            <label className={style.label}>Policies</label>
            <textarea
              // required
              id="policies"
              ref={policiesInputRef}
              className={style.input}
            />
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------ */}

        <div className={style.formSection}>
          <h2 className={style.formHeading}>Images</h2>
          <div className={style.field}>
            <label className={style.label}>Image</label>
            <input
              type="file"
              // required
              id="image"
              multiple
              onChange={handleChange}
              className="mt-2"
            />
            <button
              className="text-white bg-indigo-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-sm"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Add Hotel
        </button>
      </form>
    </>
  );
}

export default NewHotelForm;
