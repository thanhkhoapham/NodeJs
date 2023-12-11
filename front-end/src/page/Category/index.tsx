import { ReactElement, useEffect, useState } from "react"
import { CategoryCard } from "../../components/Card"
import { axiosInstance } from "../../api/axiosInstance";
//interface

interface Category {
  CategoryID: number,
  CategoryName: string,
  Description: string,
  CreateOn: string
}

export const Category = (): ReactElement => {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
      axiosInstance.get("/api/categories")
      .then((response: any) => setCategories(response.data))
      .catch((error: any) => console.error("Get categories is failed with details: ", error.data));
    }, []);

    return  <>
   {
     categories?.map(cate => 
        <CategoryCard title={cate.CategoryName} description={cate.Description} />
    )
   }
    </>
}