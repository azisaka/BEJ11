import balls from '../public/balls.gif'
import Image from 'next/image'
import { useState } from 'react'

type Data = {
  salary: number
  inss: number
  irpf: number
  netSalary: number
}

const defaultData: Data = {
  salary: 0,
  inss: 0,
  irpf: 0,
  netSalary: 0,
}

const Home = () => {
  const [state, setState] = useState({
    hidden: true,
    loading: false,
    data: defaultData
  })

  const onChange = (event) => {
    const value = event.target.value

    setState({
      ...state,
      loading: true,
    })

    fetch("https://api.github.com/users/azisaka").
      then((response) => response.json()).
      then((data) => {
        console.log(data)

        if (value === '') {
          setState({
            ...state,
            hidden: true,
            loading: false,
          })
        } else {
          setState({
            ...state,
            hidden: false,
            loading: false,
            data: {
              ...defaultData,
              salary: value,
            }
          })
        }
      })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card my-5 p-5">
            <div className="mb-5 text-center">
              <h1>Salário</h1>
              <p className="lead">Vamos calcular o seu salário líquido</p>
            </div>

            <form>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label className="form-label" htmlFor="raw-salary">Salário Bruto</label>
                </div>
                <div className="col-auto">
                  <input className="form-control" id="raw-salary" type="text" onChange={onChange} />
                </div>
                <div className="col-auto">
                  <div className="form-text">Seu salário sem descontos</div>
                </div>
              </div>
            </form>

            <div className={`loading p-5 text-center ${state.loading ? "" : "d-none"}`}>
              <Image alt="loading" width={50} height={50} src={balls} />
            </div>

            <div className={(state.hidden ? "d-none" : "")}>
              <div className="py-5">
                <h2 className="py-2">Resultado dos Cálculos</h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Salário Bruto</th>
                      <td className="text-end">R$ {state.data.salary}</td>
                    </tr>

                    <tr>
                      <th scope="row">IRPF</th>
                      <td className="text-end text-danger">R$ {state.data.irpf}</td>
                    </tr>

                    <tr>
                      <th scope="row">INSS</th>
                      <td className="text-end text-danger">R$ {state.data.inss}</td>
                    </tr>
                  </tbody>
                  <tfoot className="table-group-divider">
                    <tr>
                      <th scope="row">Salário Líquido</th>
                      <td className="text-end">R$ {state.data.netSalary}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
