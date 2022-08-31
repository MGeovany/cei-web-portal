import React from 'react'
import { TextInput, Textarea, Grid,Select, MultiSelect} from '@mantine/core'
import { useForm} from '@mantine/form'
import { DatePicker,TimeInput } from '@mantine/dates'
import dayjs from 'dayjs'
import '../styles/Calendario.css'
import { Opciones } from '../API'

export const AgregarEventos = ({ innerProps }) => {
  const [lugarSedeList,setLugarSedeList]= React.useState([]);
  const [organizadorList,setOrganizadorList]= React.useState([]);
  React.useEffect(()=>{
      Opciones.getLugarSede()
      .then(data=>{setLugarSedeList(data)})
      .catch(err=>{console.error(err)})
      Opciones.getOrganizador()
      .then(data=>{setOrganizadorList(data)})
      .catch(err=>{console.error(err)})
  },[])
  const form = useForm({
    initialValues: {
      id: innerProps.id,
      fechaFin: innerProps.fechaFin,
      fechaInicio: innerProps.fechaInicio,
      sede: innerProps?.sede || "1",
      semana: innerProps?.semana || "0",
      titulo: innerProps?.titulo || "",
      descripcion: innerProps?.descripcion || "",
      _fechaInicio: dayjs(innerProps?.fechaInicio || new Date()).format('YYYY-MM-DD'),
      _horaInicio: innerProps?.fechaInicio ||new Date(),
      _fechaFin: dayjs(innerProps?.fechaFin || new Date()).format('YYYY-MM-DD'),
      _horaFin: innerProps?.fechaFin || new Date(),
    }
  })
  function submitValues(e){
    let timeInicio = dayjs(form.values._horaInicio).format('HH:mm:ss')
    let timeFin = dayjs(form.values._horaFin).format('HH:mm:ss')
    let resultInicio = `${form.values._fechaInicio}T${timeInicio}`
    let resultFinal = `${form.values._fechaFin}T${timeFin}`
    form.setFieldValue('fechaInicio', resultInicio)
    form.setFieldValue('fechaFin', resultFinal)

    let result={
      id: form.values.id,
      fechaInicio: resultInicio,
      fechaFin: resultFinal,
      sede: form.values.sede,
      semana: form.values.semana,
      titulo: form.values.titulo,
      descripcion: form.values.descripcion,
    }
      innerProps.action(result)
  }
return (
    <>
      <div className='cal__modal__title'>
        {' '}
        AGREGAR NUEVO <span style={{ color: '#e1575f' }}>EVENTO</span>{' '}
      </div>
      <form className='calendario__form'>
        <Grid grow>
        <Grid.Col md={6} xs={6}>
        <DatePicker
              placeholder='Fecha Inicio'
              label='Fecha Inicio'
              inputFormat="DD/MM/YYYY"
              required
              withinPortal
              value={new Date(form.getInputProps('_fechaInicio').value)}
              onChange={(e)=>{form.setFieldValue('_fechaInicio',e.target.value)}}
            />
        </Grid.Col>
        <Grid.Col md={6} xs={6}>
        <TimeInput
              placeholder='Hora Inicio'
              label='Hora Inicio'
              format='12'
              clearable
              required
              value={new Date(form.getInputProps('_horaInicio').value)}
              onChange={(e)=>{form.setFieldValue('_horaInicio',e)}}
            />
        </Grid.Col>
        <Grid.Col md={6} xs={6}>
        <DatePicker   
              placeholder='Fecha Fin'
              label='Fecha Fin'
              inputFormat="DD/MM/YYYY"
              required
              withinPortal
              value={new Date(form.getInputProps('_fechaFin').value)}
              onChange={(e)=>{form.setFieldValue('_fechaFin',e.target.value)}}
            />
        </Grid.Col>
        <Grid.Col md={6} xs={6}>
            <TimeInput
              placeholder='Hora Fin'
              label='Hora Fin'
              format='12'
              clearable
              required
              value={new Date(form.getInputProps('_horaFin').value)}
              onChange={(e)=>{form.setFieldValue('_horaFin',e)}}
            />
        </Grid.Col>
          <Grid.Col md={7} xs={12}  >
            <TextInput
              required
              label='Evento'
              placeholder='Título'
              {...form.getInputProps('titulo',{type:'text'})}
            />
          </Grid.Col>
          <Grid.Col md={12} xs={12}>
            <Textarea
              required
              label='Descripción'
              placeholder='Descripción del evento'
              {...form.getInputProps('descripcion',{type:'text'})}
            />
          </Grid.Col>
          <Grid.Col md={4} xs={12}>
            <Select
              label="Semana"
              placeholder="Escoja uno"
              value={form.values?.semana || "0"}
              onChange={(e)=>{form.setFieldValue('semana',e)}}
              data={[
                { value: '0', label: 'Por definir' },
                { value: '1', label: 'Semana 1' },
                { value: '2', label: 'Semana 2' },
                { value: '3', label: 'Semana 3' },
                { value: '4', label: 'Semana 4' },
                { value: '5', label: 'Semana 5' },
                { value: '6', label: 'Semana 6' },
                { value: '7', label: 'Semana 7' },
                { value: '8', label: 'Semana 8' },
                { value: '9', label: 'Semana 9' },
                { value: '10', label: 'Semana 10' },
              ]}
            />
          </Grid.Col>

          <Grid.Col md={4} xs={12}>
            <Select
              label="Sede"
              value={form.values.sede?.toString() || "1"}
              placeholder="Escoja uno"
              onChange={(e)=>{form.setFieldValue('sede',e)}}
              data={[
                { value: '1', label: 'Sede Central SPS' },
                { value: '2', label: 'Sede Norte' },
                { value: '3', label: 'Tegucigalpa' },
                { value: '4', label: 'La Ceiba' },
                { value: '5', label: 'Universidad virtual' },
              ]}
            />
          </Grid.Col>
          <Grid.Col md={4} xs={12}/>
          <Grid.Col md={4} xs={12}>
              <MultiSelect 
              label='Lugar de evento'
              placeholder='Escoja varios'
              data={lugarSedeList}
              onChange={(e)=>{console.log(e)}}
              ></MultiSelect>
          </Grid.Col>
          <Grid.Col md={4} xs={12}>
              <MultiSelect 
              label='Organizador'
              placeholder='Escoja varios'
              data={organizadorList}
              ></MultiSelect>
          </Grid.Col>
        </Grid>
        <div className='cal__caso__button' onClick={(e)=>submitValues(e)}>Agregar Evento</div>
      </form>
    </>
  )
}
