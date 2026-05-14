import React from "react";
import Categories from "../Categories";
import { Suspense } from "react";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<h1>Category news loading......................</h1>}>
         <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
