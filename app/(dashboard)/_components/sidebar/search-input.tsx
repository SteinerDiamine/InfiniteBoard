


"use client"

import qs from 'query-string';
import { Search } from 'lucide-react';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';

import {
  ChangeEvent, useEffect, useState, useCallback,
} from 'react';
import { Input } from '@/components/ui/input';

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  // Create a debounced function that updates the router
  const debouncedPush = useCallback(
    debounce((searchValue: string) => {
      const url = qs.stringifyUrl({
        url: '/',
        query: { search: searchValue },
      }, { skipEmptyString: true, skipNull: true });
      router.push(url);
    }, 500),
    [router]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedPush(newValue); // Call the debounced function
  };

  // Clean up the debounced function on component unmount
  useEffect(() => {
    return () => {
      debouncedPush.cancel();
    };
  }, [debouncedPush]);

  return (
    <div className='w-full relative'>
      <Search 
        className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4' 
      />
      <Input 
        className='w-full max-w-[516px] pl-9'
        placeholder='Search boards'
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}

