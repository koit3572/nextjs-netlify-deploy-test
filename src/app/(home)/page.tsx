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
  const dispatch = useAppDispatch();
  const { photos,isLoading } = useAppSelector(state => state.photosSlice)
  useEffect(() => {
    if (Object.keys(photos).length === 0) {
      dispatch(fetchPhotos())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    console.log("photos", photos);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLoading])
  return (
   <div>안녕하세요</div>
  )
}
