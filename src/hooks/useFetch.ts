/**
 * useFetch.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

interface IUseFetchResponse<T> {
  data: T | null;
  error: unknown | null;
  isLoading: boolean;
}

const useFetch = <T>(url: string): IUseFetchResponse<T> => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<unknown | null>(null);
  const [data, setData] = React.useState<T | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const data = await response.json();

        setData(data);
        setError(null);
      } catch (err) {
        setData(null);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    data,
    error,
    isLoading
  };
};

export default useFetch;