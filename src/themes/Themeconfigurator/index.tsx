import Lucide from "../../components/base/Lucide";
import SlideOver from "../../components/Headless/SlideOver";
import {useState} from "react";
import {selectTheme, setTheme, Themes} from "../../stores/themeSlice.ts";
import {useAppDispatch, useAppSelector} from "../../stores/hooks.ts";
import clsx from "clsx";
import {selectDisplayMode, setDisplayMode} from "../../stores/displayModeSlice.ts";
import {ColorSchemes, selectColorScheme, setColorScheme} from "../../stores/colorSchemeSlice.ts";
import {twMerge} from "tailwind-merge";

const ThemeConfigurator = () => {
    const dispatch = useAppDispatch();

    // const activeColorScheme = useAppSelector(selectColorScheme);
    const activeDisplayMode = useAppSelector(selectDisplayMode);
    const activeColorScheme = useAppSelector(selectColorScheme);
    const activeTheme = useAppSelector(selectTheme);
    const setDarkModeClass = () => {
        console.log(activeDisplayMode);
        const el = document.querySelectorAll("html")[0];
        activeDisplayMode == 'dark' ? el.classList.add("dark") : el.classList.remove("dark");
    };

    const switchTheme = (theme: Themes["name"]) => {
        dispatch(setTheme(theme));
    };
    const switchDarkMode = (displayMode: string) => {
        dispatch(setDisplayMode(displayMode));
        setDarkModeClass();
    };
    setDarkModeClass();

    const setColorSchemeClass = () => {
        const el = document.querySelectorAll("html")[0];
        el.setAttribute("class", activeColorScheme);
        activeDisplayMode == "dark" && el.classList.add("dark");
    };

    const switchColorScheme = (colorScheme: ColorSchemes) => {
        dispatch(setColorScheme(colorScheme));
        setColorSchemeClass();
    };
    setColorSchemeClass();

    const [openSlideOver, setOpenSlideOver] = useState<boolean>(false);

    // templates
    const themes: Array<Themes["name"]> = [
        "clarity",
        "vibrant",
        "serenity",
    ];

    // displays
    const displayThemes : Array<string> = [
        "light",
        "dark",
        "system",
    ];

    // schemes
    const colorSchemes : Array<ColorSchemes> = [
        "default",
        "theme-1",
        "theme-2",
        "theme-3",
        "theme-4",
        "theme-5",
    ]

    return (
        <div>
            <SlideOver open={openSlideOver} onClose={() => setOpenSlideOver(false)} >
                <div>
                    <div>
                        <div>
                            <div className="text-base text-slate-600 dark:text-slate-400 font-semibold">Template</div>
                            <p className="text-xs text-slate-400 dark:text-slate-400/50">Choose your theme template</p>
                        </div>
                        <div className="grid grid-cols-2 my-5 gap-y-3.5 gap-x-5">
                            {themes.map((theme, index: number) => (
                                <div key={index}>
                                    <div
                                        className={
                                            clsx([
                                                    "h-28 cursor-pointer bg-slate-50 box p-1",
                                                    activeTheme.name == theme &&
                                                    "border-2 border-primary",
                                                ]
                                            )}
                                        onClick={() => switchTheme(theme)}></div>
                                    <div className="mt-2.5 capitalize text-center text-xs text-slate-500 dark:text-slate-400">
                                        {theme}
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>

                    <div className="my-3 border-t border-slate-200 dark:border-slate-100/10 pt-2">
                        <div>
                            <div className="text-base text-slate-600 dark:text-slate-400 font-semibold">Theme Mode</div>
                            <p className="text-xs text-slate-400 dark:text-slate-400/50">choose your preferred Theme Mode</p>
                        </div>

                        <div className="grid grid-cols-3 my-5 gap-y-3.5 gap-x-5">
                            {displayThemes.map((displayTheme, index) => (
                                <div key={index}>
                                    <div className={
                                        clsx([
                                                "h-10 cursor-pointer bg-slate-50 box p-1",
                                                activeDisplayMode === displayTheme && "border-2 border-primary",
                                            ]
                                        )}
                                         onClick={() => switchDarkMode(displayTheme)}>
                                        <div className={'flex overflow-hidden h-full rounded'}>
                                            {displayTheme === 'light' &&
                                                (<div className={"h-full bg-slate-100 flex-1"}></div>)}
                                            {displayTheme === 'dark' &&
                                                (<div className={"h-full bg-slate-500 flex-1"}></div>)}
                                            { displayTheme === 'system' && (<>
                                                <div className={"h-full bg-slate-100 flex-1"}></div>
                                                <div className={"h-full bg-slate-600 flex-1"}></div>
                                            </>)
                                            }
                                        </div>
                                    </div>
                                    <div className={"text-slate-500 text-xs capitalize mt-2"}>{displayTheme}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between items-center my-3 border-t border-slate-200 dark:border-slate-100/10 pt-2">
                        <div className="flex-1">
                            <div className="text-base text-slate-600 dark:text-slate-400 font-semibold">RTL Mode</div>
                            <p className="text-xs text-slate-400 dark:text-slate-400/50">Change Language Direction</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center my-3 border-t border-slate-200 dark:border-slate-100/10 pt-2">
                            <div className="flex-1">
                                <div className="text-base text-slate-600 dark:text-slate-400 font-semibold">Color Scheme</div>
                                <p className="text-xs text-slate-400 dark:text-slate-400/50">Choose your color preferred color scheme</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 my-5 gap-y-3.5 gap-x-5">
                            {colorSchemes.map((scheme, index) => (
                                <div key={index}>
                                    <div className={
                                        clsx([
                                                "h-10 cursor-pointer bg-white dark:bg-slate-500/10 box p-1",
                                                activeColorScheme === scheme &&
                                                "bg-primary border-2 border-primary dark:border-slate-500/10",
                                            ]
                                        )}
                                         onClick={() => switchColorScheme(scheme)}>
                                        <div className="h-full overflow-hidden rounded">
                                            <div className="flex items-center h-full -mx-2">
                                                <div
                                                    className={twMerge([
                                                        "w-full h-[140%] bg-primary",
                                                        scheme !== 'default' ? scheme : "bg-blue-500"
                                                    ])}

                                                >

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </SlideOver>
            <button
                className="fixed bottom-5 right-5 z-30 flex items-center justify-center mb-5 mr-5 text-white rounded-full shadow-lg cursor-pointer w-14 h-14 bg-primary dark:bg-darkmode-500"
                onClick={() => setOpenSlideOver(true)}>
                <Lucide className="w-5 h-5 animate-spin" icon="Settings"/>
            </button>
        </div>
    );
}

export default ThemeConfigurator