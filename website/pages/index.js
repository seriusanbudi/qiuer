import {
  IoCard,
  IoConstruct,
  IoColorWand,
  IoRocket,
  IoArrowDownCircleOutline,
} from "react-icons/io5";
import styled from "styled-components";
import Head from "next/head";

const features = [
  {
    key: "free",
    title: "Gratis",
    content:
      "Mulai tanpa biaya, tanpa kartu kredit dan upgrade akun mu tanpa komitmen.",
    icon: <IoCard style={{ fontSize: "32px" }} />,
  },
  {
    key: "easy-to-use",
    title: "Mudah Digunakan",
    content:
      "Kelola konten mu kapanpun dan dimanapun tanpa perlu memikirkan infrastruktur.",
    icon: <IoConstruct style={{ fontSize: "32px" }} />,
  },
  {
    key: "costumizable",
    title: "Dapat Disesuaikan",
    content:
      "Katalog mu dapat disesuaikan baik konten dan tampilannya, pilih tampilan yang tersedia atau buat tampilan mu sendiri.",
    icon: <IoColorWand style={{ fontSize: "32px" }} />,
  },
  {
    key: "easy-access",
    title: "Akses Tanpa Batas",
    content:
      "Bagikan alamat web unik atau cetak QRCode mu di media apapun, sebarkan dan biarkan semua orang melihat apa yang ingin kau tawarkan.",
    icon: <IoRocket style={{ fontSize: "32px" }} />,
  },
];

const Hero = styled("div")`
  position: relative;
  z-index: 1;
  height: 95vh;

  ::after {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url("/hero-image.jpg");
    background-size: cover;
    position: absolute;
    opacity: 0.6;
    background-attachment: fixed;
  }
`;

const FlipSection = styled("div")`
  display: grid;
  gap: 32px;
  grid-template-areas:
    "image-area"
    "content-area";
  margin-bottom: 120px;

  @media (min-width: 768px) {
    display: grid;
    gap: 32px;
    align-items: center;
    margin-bottom: 120px;
    max-width: 920px;

    :nth-child(even) {
      grid-template-columns: 340px auto;
      grid-template-areas: "image-area content-area";
    }

    :nth-child(odd) {
      grid-template-columns: auto 340px;
      grid-template-areas: "content-area image-area";
    }
  }
`;

const Homepage = () => {
  return (
    <>
      <Head>
        <title>qiuer</title>
      </Head>
      <Hero className="w-100 flex items-center p-4 md:p-20 bg-blue-500">
        <div style={{ maxWidth: "800px" }}>
          <div>
            <div className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Kelola katalog mu,
              <br /> bagikan dengan QRCode.
            </div>
            <p
              className="text-white mb-10 md:mb-20"
              style={{ maxWidth: "600px" }}
            >
              qiuer adalah sebuah platform untuk mengelola katalog yang dapat
              diakses semudah mengarahkan kamera smartphone ke QRCode unik yang
              bisa disesuaikan sesuka hati dari konten hingga tampilan.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-500 py-4 px-10 rounded-lg text-white shadow-xl font-bold">
                Mulai Sekarang!
              </button>
              <button className="hidden md:block py-4 px-10 rounded-lg text-white font-bold">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute left-0 right-0 flex justify-center"
          style={{ bottom: 20 }}
        >
          <button className="animate-bounce">
            <IoArrowDownCircleOutline
              className="text-white"
              style={{ fontSize: "32px" }}
            />
          </button>
        </div>
      </Hero>

      <div className="px-4 py-20 md:p-20 bg-white">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">
          Kenapa qiuer?
        </h2>
        <p className="text-center mb-20">
          Kelola katalog mu, cetak QRCode unik nya dan biarkan semua orang
          mengetahui produk mu melalui kamera smartphonenya.
        </p>
        <div className="grid md:grid-rows-2 md:grid-flow-col gap-4">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="bg-white shadow-lg p-10 rounded-lg flex gap-4"
            >
              <div className="text-blue-500">{feature.icon}</div>
              <div>
                <h3 className="font-bold mb-2 text-blue-500 text-xl">
                  {feature.title}
                </h3>
                <p>{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-20 md:p-20 bg-white">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">
          Bagaimana qiuer bekerja?
        </h2>
        <p className="text-center mb-20">
          Ketahui 3 cara mudah untuk mulai menggunakan qiuer yang sangat mudah
          dan cepat.
        </p>

        <div className="grid justify-center">
          <FlipSection>
            <div style={{ gridArea: "image-area" }}>
              <img src="/create-account.svg" alt="create account ilustration" />
            </div>
            <div style={{ gridArea: "content-area" }}>
              <p className="text-yellow-400 text-sm tracking-wider md:mb-4">
                Step. 1
              </p>
              <h3 className="font-bold text-4xl text-blue-500 mb-2">
                Buat akun
              </h3>
              <p>
                Buat akun qiuer secara gratis, cukup isi formulir yang
                diperlukan dan kamu siap untuk mengelola katalog.
              </p>
            </div>
          </FlipSection>

          <FlipSection>
            <div style={{ gridArea: "image-area" }}>
              <img src="/manage-content.svg" alt="manage content ilustration" />
            </div>
            <div style={{ gridArea: "content-area" }}>
              <p className="text-yellow-400 text-sm tracking-wider mb-4">
                Step. 2
              </p>
              <h3 className="font-bold text-4xl text-blue-500 mb-2">
                Kelola Katalog
              </h3>
              <p>
                Buat kategori dan masukan produk mu beserta variantnya langsung
                dari admin panel yang tersedia.
              </p>
            </div>
          </FlipSection>

          <FlipSection>
            <div style={{ gridArea: "image-area" }}>
              <img src="/show-content.svg" alt="show content ilustration" />
            </div>
            <div style={{ gridArea: "content-area" }}>
              <p className="text-yellow-400 text-sm tracking-wider mb-4">
                Step. 3
              </p>
              <h3 className="font-bold text-xl text-blue-500 mb-2">Bagikan</h3>
              <p>
                Cetak dan tempatkan QRCode unik ditempat yang sesuai dan biarkan
                orang-orang melihat produk yang kamu miliki. Bisa juga dengan
                membagikan alamat katalog mu secara online.
              </p>
            </div>
          </FlipSection>
        </div>
      </div>

      <div className="px-4 py-20 md:p-20 bg-blue-500">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-white">
          Coba Gratis!
        </h2>
        <p className="text-center mb-10 text-white">
          Tak ada yang perlu di khawatirkan, buat akun mu sekarang dan coba
          gratis qiuer tanpa komitmen apapun!
        </p>

        <div className="flex justify-center">
          <button className="font-bold text-blue-500 text-lg bg-white py-4 px-10 rounded-lg">
            Daftar Sekarang!
          </button>
        </div>
      </div>

      <div className="px-4 py-20 md:p-20 bg-white">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">
          Kalkulasi Harga
        </h2>
        <p className="text-center mb-40">
          Silahkan pilih paket harga yang telah kami sediakan atau hubungi tim
          sales kami untuk mendapatkan harga terbaik sesuai dengan kebutuhan mu.
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-screen-xl">
            <div className="grid md:grid-flow-col md:grid-cols-3 gap-4">
              <div className="bg-white shadow p-10 rounded-lg flex flex-col justify-between">
                <h2 className="font-bold text-2xl">Pribadi</h2>
                <p className="mb-8">Gratis, Selamanya</p>

                <ul className="mb-10">
                  <li>- 1 Katalog</li>
                  <li>- 5 Kategori Produk per katalog</li>
                  <li>- 50 Produk dalam katalog</li>
                  <li>- 1 Akun pengelola</li>
                  <li>- Export QRCode sederhana</li>
                </ul>

                <button className="border-2 border-blue-500 font-bold px-10 py-4 text-blue-500 rounded-lg w-full">
                  Lanjutkan
                </button>
              </div>
              <div className="bg-blue-500 text-white shadow-lg p-10 flex flex-col justify-between rounded-lg">
                <div>
                  <h2 className="font-bold text-2xl">Premium</h2>
                  <p className="mb-8">Rp. 75.000 per bulan</p>
                </div>

                <ul className="mb-10">
                  <li>- 5 Katalog</li>
                  <li>- 50 Kategori produk per katalog</li>
                  <li>- 200 Produk per katalog</li>
                  <li>- 5 Akun pengelola</li>
                  <li>- Export QRCode dengan template</li>
                  <li>- Laporan analisa pengunjung</li>
                </ul>

                <button className="font-bold px-10 py-4 bg-white text-blue-500 rounded-lg w-full shadow-lg">
                  Coba Gratis 14 Hari
                </button>
              </div>
              <div className="bg-white shadow p-10 flex flex-col justify-between">
                <div>
                  <h2 className="font-bold text-2xl">Flex</h2>
                  <p className="mb-8">Sesuai permintaan</p>
                </div>

                <p className="mb-8">
                  Semua konfigurasi pada platform akan disesuaikan dengan apa
                  yang kamu inginkan.
                </p>

                <button className="border-2 border-blue-500 font-bold px-10 py-4 text-blue-500 rounded-lg w-full">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-20 md:p-20 bg-blue-500">
        <h2 className="text-center text-5xl font-bold mb-4 text-white">
          Daftar Sekarang!
        </h2>
        <p className="text-center mb-10 text-white">
          Segera gunakan qiuer untuk mengelola katalog mu tanpa ribet dan tanpa
          resiko.
        </p>

        <div className="flex justify-center">
          <button className="font-bold text-blue-500 text-lg bg-white py-4 px-10 rounded-lg">
            Buat Akun
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
