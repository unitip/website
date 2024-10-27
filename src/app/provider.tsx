"use client";

import { CounterProvider } from "@/contexts/counter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";

const queryClient = new QueryClient();

export default function Provider(props: PropsWithChildren) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale="id">
          <CounterProvider>{props.children}</CounterProvider>
        </IntlProvider>
      </QueryClientProvider>
    </>
  );
}
