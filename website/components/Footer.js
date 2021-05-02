import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="px-4 py-20 md:p-20 bg-blue-800 grid md:grid-flow-col md:grid-cols-4 gap-4">
        <div>
          <div className="font-bold text-3xl text-white mb-6">qiuer</div>
          <p className="text-white">
            qiuer adalah sebuah platform untuk mengelola katalog yang dapat
            diakses semudah mengarahkan kamera smartphone ke QRcode unik yang
            bisa disesuaikan sesuka hati dari konten hingga tampilan.
          </p>
        </div>
        <div>
          <div className="font-bold text-white mb-6">Link</div>
          <ul className="text-white">
            <li>
              <a href="#!">Apa itu QRCode?</a>
            </li>
            <li>
              <a href="#!">Apa itu Katalog?</a>
            </li>
            <li>
              <a href="#!">Partner Program</a>
            </li>
            <li>
              <a href="#!">Roadmap</a>
            </li>
            <li>
              <a href="#!">Bantuan</a>
            </li>
            <li>
              <a href="#!">Changelog</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-white mb-6">Tentang</div>
          <ul className="text-white">
            <li>
              <a href="#!">Team</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
            <li>
              <a href="#!">Karir</a>
            </li>
            <li>
              <a href="#!">Kontak</a>
            </li>
            <li>
              <a href="#!">Berita</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-white mb-6">
            Daftar Newsletter qiuer
          </div>
          <div className="grid grid-flow-col border-2 border-white rounded-lg overflow-hidden mb-10">
            <input className="rounded-none focus:outline-none bg-white w-full px-4 py-2" />
            <button
              className="px-4 py-2 text-white focus:outline-none hover:bg-blue-900"
              type="button"
            >
              Submit
            </button>
          </div>
          <div className="font-bold text-white mb-6">Ikuti qiuer</div>
          <div className="text-white flex gap-4 text-2xl">
            <a href="#!">
              <IoLogoFacebook />
            </a>
            <a href="#!">
              <IoLogoInstagram />
            </a>
            <a href="#!">
              <IoLogoYoutube />
            </a>
            <a href="#!">
              <IoLogoTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 px-20 py-2 text-xs text-white text-center">
        &#8471; qiuer 2021 Indonesia Bali
      </div>
    </>
  );
};

export default Footer;
