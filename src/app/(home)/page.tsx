'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchPhotos } from '@/store/photos/photosSlice';
import Image from 'next/image'
import { useEffect } from 'react';

// const getPhotos = async () => {
//   try {
//     const url = "http://localhost:3000/api";
//     const res = await fetch(url, {
//       method: "GET",
//       cache: "no-store",
//     });
//     const photos = await res.json()
//     return photos
//   } catch (error) {
//     console.error(error)
//   }
// }

export default function Home() {
  console.log("*****************");
  const dispatch = useAppDispatch();
  const { photos,isLoading } = useAppSelector(state => state.photosSlice)
  useEffect(() => {
    if (photos.length === 0) {
      dispatch(fetchPhotos());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // useEffect(() => {
  //   console.log("photos", photos);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[isLoading])
  return (
    <div>
      <p>{process.env.NEXT_PUBLIC_BACKEND_PROXY}</p>
      <p>{process.cwd()}</p>
      <p>{__dirname}</p>
    </div>
  );
}
