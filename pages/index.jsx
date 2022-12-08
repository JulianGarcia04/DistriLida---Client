import React from "react";

export default function Index({ message }) {
  return <div>{message}</div>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      message: "Hola Mundo",
    },
    redirect: {
      destination: "/login",
    },
  };
}
