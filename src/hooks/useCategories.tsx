import {useEffect, useState} from 'react';
import {Category} from '../interfaces/models';
import {categoriesData} from '../mocks/data-mock';

export const useCategories = () => {
  const [state, setState] = useState<Category[]>([]);

  useEffect(() => {
    setState(categoriesData);
  }, []);

  return {
    state,
  };
};
