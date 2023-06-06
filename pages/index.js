import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import Page from "../containers/Page";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Page />
      </Provider>
    </>
  );
}
