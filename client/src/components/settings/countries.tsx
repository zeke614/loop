import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countryData } from "../../data/data";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Country {
  name: string;
  flag: string;
}

interface Props {
  selected?: Country;
  setSelected?: (country: Country) => void;
  open?: boolean;
  setOpen?: (value: boolean) => void;
}

export default function CurrencyModal({
  selected,
  setSelected,
  open: openProp,
  setOpen: setOpenProp,
}: Props) {
  const [openInternal, setOpenInternal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [internalSelected, setInternalSelected] = useState<Country | undefined>(
    selected,
  );

  const isControlled =
    typeof openProp !== "undefined" && typeof setOpenProp === "function";

  const open = isControlled ? openProp : openInternal;

  const setOpen = (value: boolean) => {
    if (isControlled && setOpenProp) {
      setOpenProp(value);
    } else {
      setOpenInternal(value);
    }
  };

  const currentSelectedRef = useRef<Country | undefined>(internalSelected);

  // SYNC SELECTED COUNTRY FROM PARENT
  useEffect(() => {
    if (selected) {
      setInternalSelected(selected);
      currentSelectedRef.current = selected;
    } else {
      // Clear if no country is selected
      setInternalSelected(undefined);
      currentSelectedRef.current = undefined;
    }
  }, [selected]);

  const handleSetSelected =
    setSelected ||
    ((country) => {
      setInternalSelected(country);
      currentSelectedRef.current = country;
    });

  const backdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setOpen]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!open) return;
      if (backdropRef.current && e.target === backdropRef.current) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open, setOpen]);

  useEffect(() => {
    if (open) setSearchTerm("");
  }, [open]);

  const filteredCountries = countryData.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getFlagUrl = (flagCode: string) =>
    `https://flagcdn.com/${flagCode.toLowerCase()}.svg`;

  const handleCountrySelect = (country: Country) => {
    handleSetSelected(country);
    currentSelectedRef.current = country;
    setSearchTerm("");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={backdropRef}
          className="fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-end sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={
              window.innerWidth < 640
                ? { y: "100%" }
                : { opacity: 0, scale: 0.95 }
            }
            animate={
              window.innerWidth < 640 ? { y: "0%" } : { opacity: 1, scale: 1 }
            }
            exit={
              window.innerWidth < 640
                ? { y: "100%" }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full rounded-t-2xl px-3 pt-3 pb-6 max-h-[35%] overflow-hidden shadow-2xl border-t border-gray-200 dark:border-white/15
              sm:rounded-xl sm:max-w-md sm:border sm:px-3 sm:pt-4 sm:pb-4 sm:max-h-[85vh]"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative mb-3">
              <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="size-4.5" />
              </div>
              <input
                type="text"
                placeholder="Search country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 py-2.5 border border-zinc-950/10 dark:border-white/15 rounded-xl outline-none focus:border-gray-500"
              />
            </div>

            <div className="max-h-[11.25rem] sm:max-h-[45vh] overflow-y-auto thin-scrollbar px-1">
              <ul className="space-y-1">
                {filteredCountries.map((country) => (
                  <li key={country.name}>
                    <button
                      onClick={() => handleCountrySelect(country)}
                      className={`w-full flex items-center justify-between p-1.5 rounded-lg text-left transition-colors ${
                        currentSelectedRef.current?.name === country.name
                          ? "bg-gray-100 dark:bg-[#2d2d2d]"
                          : "hover:bg-gray-50 dark:hover:bg-[#2d2d2d]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={getFlagUrl(country.flag)}
                          alt={`${country.name} flag`}
                          className="w-5 h-4 rounded object-cover"
                        />
                        <span className="text-gray-600 dark:text-[#d4d4d8]">
                          {country.name}
                        </span>
                      </div>

                      {currentSelectedRef.current?.name === country.name && (
                        <i className="bx bx-check text-[#0ab39c] text-xl" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
