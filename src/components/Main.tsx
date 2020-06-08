import React from "react";
import {ProgrammingSkillList} from "./ProgrammingSkillList";
import "./Main.css";

export function Main() {
    return <main className="App-main">
        <div className="programming-skills">
            {ProgrammingSkillList("Languages", ["Java", "Python", "JavaScript","TypeScript"])}
            {ProgrammingSkillList("Backend", ["Spring", "Django", "Flask"])}
            {ProgrammingSkillList("Frontend", ["React", "HTML", "CSS"])}
        </div>
    </main>;
}