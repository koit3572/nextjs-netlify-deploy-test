// import { NextRequest, NextResponse } from "next/server";

// export const GET = async (req: NextRequest) => {
//   try {
//     const url = "https://jsonplaceholder.typicode.com/photos";
//     const photos = await fetch(url, {
//       method: "GET",
//       cache: "no-store",
//     });
//     const res = await photos.json();
//     return NextResponse.json(res);
//   } catch (error) {
//     console.error(error);
//   }
// };

interface PostData {
  title: string;
  discription: string;
  writer: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  content?: string;
  isFavorite: boolean;
}

import { getAllPostPaths, getPostData, getPostFolderStructure } from "@/lib/post/post";
import { NextResponse } from "next/server";

export interface IMainSideBarData {
  [dirName: string]: string[];
}
export const GET = async () => {
  try {
    // const postFolderStructure = getPostFolderStructure();
    const postPaths = await getAllPostPaths()!;
    const arr = new Array(50);
    const posts = await(postPaths as string[][]).reduce(
      async (acc, postPath, i) => {
        return acc;
      },
      Promise.resolve({ title: "안녕하세요" })
    );

    return NextResponse.json(posts);
    
  } catch (error) {
    console.error(error)
  }

  // const postFolderStructure = await getPostFolderStructure();
  // const postPaths = getAllPostPaths()!;
  // const posts = postPaths!.reduce(async (acc, postPath) => {
  //   const formatPath = postPath.join("/");
  //   const postData = await getPostData(formatPath);
  //   return (acc = {
  //     ...acc,
  //     [formatPath]: {
  //       title: postData.data.title,
  //       writer: "koit",
  //       createdAt: postData.data.createdAt,
  //       updatedAt: postData.data.updatedAt,
  //       discription: postData.data.discription,
  //       tags: postData.data.tags,
  //       isFavorite: postData.data.isFavorite,
  //     } as PostData,
  //   });
  // }, {});
  // const postData = {
  //   postFolderStructure: postFolderStructure,
  //   posts: posts,
  // };
  // return NextResponse.json(postData);

  // try {
  //   const url = "https://jsonplaceholder.typicode.com/photos";
  //   const photos = await fetch(url, {
  //     method: "GET",
  //     cache: "no-store",
  //   });
  //   const res = await photos.json();
  //   return NextResponse.json(res);
  // } catch (error) {
  //   console.error(error);
  // }
};
