import React from "react";
import { Link } from 'gatsby'
import { BsTelephoneFill } from "react-icons/bs";
import { FaMobileAlt, FaEnvelope, FaFacebook } from "react-icons/fa";


const Footer = ({ hours, contact = [] }) => {
  const currentYear = new Date().getFullYear();
  const openHrs = hours ? hours.html.split("\n").join("</p><p>") : "";
  const showAdmin = localStorage.getItem('admin') ? true : false
  const adminLink = "https://lindenhof-backend.up.railway.app/admin/content-manager/collectionType/api::menu.menu"

  console.log(contact);
  return (
    <footer className="mt-16 bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
      <div className="container p-6 text-neutral-800 dark:text-neutral-200">
        <div className="grid gap-2 md:grid-cols-3">
          <div className="mb-6">
            <h5 className="mb-2 font-medium uppercase ">Opening Hours</h5>
            <div
              key={`openHrs`}
              id="___gatsby"
              dangerouslySetInnerHTML={{
                __html: openHrs,
              }}
            />
          </div>
          {" "}
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase">Contact</h5>

            <p className="mb-6 ">{contact.address}</p>

            <ul className="flex max-md:justify-center">
              {contact?.contact?.telephone && (
                <li className="mx-2 ">
                  <a
                    href={`tel:${contact.contact.telephone}`}
                    rel="nofollow noreferrer noopener"
                  >
                    <BsTelephoneFill className="hover:scale-150 hover:fill-primary-200" />
                  </a>
                </li>
              )}
              {contact.contact?.mobile && (
                <li className="mx-2 ">
                  <a
                    href={`tel:${contact.contact.mobile}`}
                    rel="nofollow noreferrer noopener"
                  >
                    <FaMobileAlt className="hover:scale-150 hover:fill-primary-200" />
                  </a>
                </li>
              )}
              {contact.contact?.email && (
                <li className="mx-2 ">
                  <a
                    href={`mailto:${contact.contact.email}`}
                    rel="nofollow noreferrer noopener"
                  >
                    <FaEnvelope className="hover:scale-150 hover:fill-primary-200" />
                  </a>
                </li>
              )}
              {contact.contact?.facebook && (
                <li className="mx-2 ">
                  <a
                    href={`https://www.facebook.com/${contact.contact.facebook}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <FaFacebook className="hover:scale-150 hover:fill-primary-200" />
                  </a>
                </li>
              )}
            </ul>

            <p className="mb-4" />
          </div>

          <div className="mx-4 mb-6 flex justify-center md:mb-0">
            <iframe
              width="100%"
              className="rounded"
              title="location map"
              webkitFilter="invert(90%) grayscale(100%)"
              filter="invert(90%) grayscale(100%)"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6912.749519168954!2d13.65194608249894!3d52.22474487266107!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8166bd79f1dd1%3A0x348cb559539751e6!2sLindenhof%20P%C3%A4tz!5e0!3m2!1sen!2sde!4v1676908879463!5m2!1sen!2sde"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* 
      <div className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © {currentYear} |
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://hammer3.de/"
        >
          {" "}
          hammer3
        </a>
        <a className="ml-32 text-neutral-600" href={adminLink}>
          Admin
        </a>
        <Link
          className="mx-4 text-neutral-600  " to="/menu">
          Menu Preview
        </Link>
      </div> */}

      <div className="p-4 flex justify-center text-center text-neutral-200 bg-neutral-700 ">

        <div className="flex justify-center">
          © {currentYear} |
          <a
            className="text-neutral-800 dark:text-neutral-400 ml-1"
            href="https://hammer3.de/"
          >
            hammer3
          </a>
        </div>
        {showAdmin &&
          <div>
            <div className="text-neutral-200 ml-1">
              <a href={adminLink}>
                | Admin
              </a>
              <Link
                className="ml-1" to="/menu">
                | Menu Preview
              </Link>
            </div>
          </div>
        }
      </div>
    </footer>
  );
};

export default Footer;
