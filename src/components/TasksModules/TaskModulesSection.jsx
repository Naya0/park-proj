import React from 'react'
import TaskModulesParking from './TaskModulesParking'
import TasksModulesAdminPanelList from './TasksModulesAdminPanelList'
import TasksModulesFormSection from './TasksModulesFormSection'

const TaskModulesSection = () => {
  return (
    <section className="tasks-modules">
        <div className="container">
            <h2>Предлагаем эффективные модули для решения ваших задач</h2>

            <TaskModulesParking />
            <TasksModulesAdminPanelList />
            <TasksModulesFormSection />
        </div>
    </section>
  )
}

export default TaskModulesSection