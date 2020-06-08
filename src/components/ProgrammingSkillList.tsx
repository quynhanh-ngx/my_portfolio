import React from "react";
import './ProgrammingSkillList.css';

export function ProgrammingSkillList(title: string, skillList: string[]) {
    return <div className="programming-skill-list">
        <h2>{title}</h2>
        <ul>
            {skillList.map(function (skill, index) {
                return <li>{skill}</li>;
            })}
        </ul>
    </div>;
}