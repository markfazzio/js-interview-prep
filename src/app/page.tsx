import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { ArraysSection } from "@/sections/Arrays";
import { FunctionsSection } from "@/sections/Functions";
import { GlossarySection } from "@/sections/Glossary";
import { NumbersSection } from "@/sections/Numbers";
import { ObjectsSection } from "@/sections/Objects";
import { SetsSection } from "@/sections/Sets";
import { StringsSection } from "@/sections/Strings";
import { UtilitiesSection } from "@/sections/Utilities";
import { ValuesSection } from "@/sections/Values";

export default function Home() {
  return (
    <main className="min-h-screen py-20 px-10">
      <Navbar />
      <PageHeader />
      <ObjectsSection />
      <FunctionsSection />
      <ArraysSection />
      <ValuesSection />
      <UtilitiesSection />
      <StringsSection />
      <NumbersSection />
      <SetsSection />
      <GlossarySection />
    </main>
  );
}
