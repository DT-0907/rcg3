import { useEffect, type RefObject } from "react";
import { fetchLoadSvg, mountLoadSvg } from "@/lib/loadSvg";

export function useLoadSvg<T extends HTMLElement>(ref: RefObject<T | null>) {
  useEffect(() => {
    let cancelled = false;

    fetchLoadSvg()
      .then((markup) => {
        if (!cancelled && ref.current) {
          mountLoadSvg(ref.current, markup);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [ref]);
}
