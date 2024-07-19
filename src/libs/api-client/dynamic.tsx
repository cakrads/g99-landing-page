/* eslint-disable react/display-name */
import React, { Fragment } from "react";

export const dynamic = <T,>(callback: () => Promise<React.ComponentType<T>>, { loading: Loading = () => <Fragment /> }: { loading?: React.ComponentType, ssr?: boolean }): React.FC<T> => {
  const DynamicComponent = React.lazy(
    async () => {
      // eslint-disable-next-line no-useless-catch
      try {
        const result = await callback();
        return ({ default: result });
      } catch (error) {
        throw error;
      }
    });

  return React.forwardRef((props, ref) => (
    <React.Suspense fallback={<Loading />}>
      <DynamicComponent ref={ref} {...props as any} />
    </React.Suspense>
  )) as any;
};
