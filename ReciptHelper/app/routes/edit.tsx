import CustomDatePicker from "~/helpers/CustomDatePicker";
import { useEffect, useState } from "react";
export default function EditPage() {
  const [selectedDate, setSelectedDate] = useState("");
  useEffect(() => {
    
  }, []);
  const getDatePlusTwoYears = () => {
    if (!selectedDate) return "";
    const date = new Date(selectedDate);
    date.setFullYear(date.getFullYear() + 2);
    const formattedDate = `${String(date.getDate()).padStart(2, "0")}-${String(
      date.getMonth() + 1,
    ).padStart(2, "0")}-${date.getFullYear()}`;
    return formattedDate;
  };
  return (
    <div className="w-full h-full">
      <div className="flex flex-col pt-12 justify-center items-center">
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
          Redigere kvittering
        </h1>
        <form className="space-y-6 pt-4">
          <div className="panel overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0 dark:divide-slate-800">
              <div className="space-y-5 p-6 sm:p-8">
                <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                  Købsdetaljer
                </h2>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Købsdato
                  </label>
                  <CustomDatePicker
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Reklamationsfrist
                  </label>
                  <input
                    type="text"
                    readOnly
                    name="slutDato"
                    value={getDatePlusTwoYears()}
                    className="form-input cursor-not-allowed bg-slate-50 text-slate-500 dark:bg-slate-900 dark:text-slate-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Link til e-mail
                  </label>
                  <input
                    type="url"
                    name="emailLink"
                    placeholder="https://..."
                    className="form-input"
                  />
                </div>
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                  Produktinfo
                </h2>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Produktnavn
                  </label>
                  <input
                    type="text"
                    name="produktNavn"
                    placeholder="f.eks. MacBook Pro"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Pris (DKK)
                  </label>
                  <input
                    type="number"
                    name="pris"
                    placeholder="0,00"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Firma / butik
                  </label>
                  <input
                    name="firmaNavnToCheck"
                    type="text"
                    placeholder="Hvor er det købt?"
                    className="form-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
