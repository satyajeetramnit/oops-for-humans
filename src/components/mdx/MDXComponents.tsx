import React from 'react';
import { CopyButton } from './CopyButton';
import CookieFactory from '../playground/CookieFactory';
import RobotBuilder from '../playground/RobotBuilder';
import ShapeShifter from '../playground/ShapeShifter';
import RobotAssemblyLine from '../playground/RobotAssemblyLine';
import GlobalScoreboard from '../playground/GlobalScoreboard';
import UniversalAdapter from '../playground/UniversalAdapter';
import BombSquad from '../playground/BombSquad';
import SortingHat from '../playground/SortingHat';
import BlueprintBuilder from '../playground/BlueprintBuilder';
import MagicBox from '../playground/MagicBox';
import TrafficLight from '../playground/TrafficLight';
import SolidLab from '../playground/SolidLab';
import TheKing from '../playground/TheKing';
import ToyFactory from '../playground/ToyFactory';
import NewsStation from '../playground/NewsStation';
import BattleBot from '../playground/BattleBot';
import RelationshipGraph from '../playground/RelationshipGraph';
import GarbageCollector from '../playground/GarbageCollector';
import ThreadRace from '../playground/ThreadRace';
import InjectorArm from '../playground/InjectorArm';
import TestRunner from '../playground/TestRunner';
import CouplingMeter from '../playground/CouplingMeter';
import CloningMachine from '../playground/CloningMachine';
import FreezeRay from '../playground/FreezeRay';
import XRaySpecs from '../playground/XRaySpecs';
import TypeTransformer from '../playground/TypeTransformer';
import ShieldedVault from '../playground/ShieldedVault';
import BlueprintMaker from '../playground/BlueprintMaker';
import SignalTower from '../playground/SignalTower';
import CodeSwitcher from './CodeSwitcher';

export const MDXComponents = {
    CookieFactory,
    RobotBuilder,
    ShapeShifter,
    RobotAssemblyLine,
    GlobalScoreboard,
    UniversalAdapter,
    BombSquad,
    SortingHat,
    BlueprintBuilder,
    MagicBox,
    TrafficLight,
    SolidLab,
    TheKing,
    ToyFactory,
    NewsStation,
    BattleBot,
    RelationshipGraph,
    GarbageCollector,
    ThreadRace,
    InjectorArm,
    TestRunner,
    CouplingMeter,
    CloningMachine,
    FreezeRay,
    XRaySpecs,
    TypeTransformer,
    ShieldedVault,
    BlueprintMaker,
    SignalTower,
    CodeSwitcher,
    h1: (props: any) => <h1 className="text-3xl md:text-4xl font-black mb-6 text-ink" {...props} />,
    h2: (props: any) => <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 border-b-2 border-border-base pb-2 text-ink" {...props} />,
    h3: (props: any) => <h3 className="text-lg md:text-xl font-bold mt-6 mb-3 text-ink" {...props} />,
    p: (props: any) => <p className="mb-4 text-base md:text-lg leading-relaxed text-ink/90" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-ink/60" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-6 mb-4 space-y-2 marker:font-bold marker:text-ink/60" {...props} />,
    li: (props: any) => <li className="pl-1 text-ink/90" {...props} />,
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-border-base pl-4 py-2 my-6 bg-pencil/5 italic text-lg text-ink/80 rounded-r-lg shadow-sm" {...props} />
    ),
    code: (props: any) => {
        const isInline = !props.className;
        if (isInline) {
            return <code className="font-mono text-sm bg-pencil/10 px-1.5 py-0.5 rounded border border-border-base text-pink-600 dark:text-pink-400" {...props} />;
        }
        // Block code: reset global styles
        return <code className="bg-transparent border-none p-0 text-inherit font-inherit" {...props} />;
    },
    pre: (props: any) => {
        // Extract text content safely
        let codeText = '';
        const children = props.children;
        if (children && children.props && children.props.children) {
            codeText = String(children.props.children).replace(/\n$/, '');
        }

        return (
            <div className="relative group my-6">
                <CopyButton text={codeText} />
                <pre className="text-gray-100 p-4 rounded-lg border-2 border-border-base shadow-sketch overflow-x-auto font-mono text-sm leading-relaxed" {...props} />
            </div>
        );
    },
    // Custom Components
    AnalogyBox: ({ type, children }: { type: string, children: React.ReactNode }) => (
        <div className="my-8 p-4 md:p-6 border-2 border-border-base rounded-lg shadow-sketch bg-paper relative overflow-hidden transition-colors">
            <div className="absolute top-0 right-0 bg-ink text-paper text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-widest">
                Analogy: {type}
            </div>
            <div className="text-lg font-medium text-ink/90">
                {children}
            </div>
        </div>
    ),
};
