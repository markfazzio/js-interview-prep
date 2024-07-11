"use client";

import { useContext } from "react";
import {
  MainPage,
  Navbar,
  PageHeader,
  SwitchTheme,
  useScrollSpy,
} from "@markfazzio/docs-ui-components";

import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { ArraysSection } from "@/sections/Arrays";
import { FunctionsSection } from "@/sections/Functions";
import { GlossarySection } from "@/sections/Glossary";
import { NumbersSection } from "@/sections/Numbers";
import { ObjectsSection } from "@/sections/Objects";
import { SetsSection } from "@/sections/Sets";
import { StringsSection } from "@/sections/Strings";
import { UtilitiesSection } from "@/sections/Utilities";
import { ValuesSection } from "@/sections/Values";
import { getSectionIdsArray } from "@/utils/section-utils";
import { SECTIONS } from "@/constants";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  const handleOnThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const ids = getSectionIdsArray();
  const activeId = useScrollSpy(ids, 54); //
  const appTitle = "JS Interview Prep";

  return (
    <div className={`theme-${theme}`}>
      <MainPage>
        <Navbar activeId={activeId} navItems={SECTIONS} theme={theme} />
        <SwitchTheme
          checked={theme === "light" ? true : false}
          onChange={handleOnThemeChange}
        />
        <PageHeader title={appTitle}>
          <p>
            Quick refresher/guide to JavaScript for all experience levels. This
            is by no means a comprehensive guide. For that,{" "}
            <a
              className="hover:underline font-semibold"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              View the MDN JavaScript Guide
            </a>
            . Make sure to also check out:{" "}
            <a
              className="hover:underline font-semibold"
              href="https://ts-interview-prep.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              TypeScript Interview Prep
            </a>
          </p>
        </PageHeader>
        {/* sections */}
        <ObjectsSection />
        <FunctionsSection />
        <ArraysSection />
        <ValuesSection />
        <UtilitiesSection />
        <StringsSection />
        <NumbersSection />
        <SetsSection />
        <GlossarySection />
      </MainPage>
    </div>
  );
}
