<template>
    <div>
        <div class="center content-inputs">
            <vs-input
                    primary
                    v-model="value"
                    placeholder="Primary" >
                <template #icon>
                    <i class='bx bx-user'></i>
                </template>
            </vs-input>


            <vs-input
                    success
                    v-model="value2"
                    placeholder="Success" />

            <vs-input
                    danger
                    v-model="value3"
                    placeholder="Danger" />

            <vs-input
                    warn
                    v-model="value4"
                    placeholder="Warn" />

            <vs-input
                    dark
                    v-model="value5"
                    placeholder="Dark" />

            <vs-input
                    color="#7d33ff"
                    v-model="value6"
                    placeholder="HEX" />

            <vs-input
                    color="rgb(59,222,200)"
                    v-model="value7"
                    placeholder="HEX" />
        </div>

        <vs-card-group>
            <vs-card  v-for="n in 10" :key="n">
                {{n}}
                {{item}}
                <template #title>
                    <h3>Pot with a plant</h3>
                </template>
                <template #img>
                    <img src="http://q2.qlogo.cn/headimg_dl?bs=qq&dst_uin=1076998404&src_uin=1076998404&fid=1076998404&spec=100&url_enc=0&referer=bu_interface&term_type=PC" alt="">
                </template>
                <template #text>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </template>
                <template #interactions>
                    <vs-button danger icon>
                        <i class='bx bx-heart'></i>
                    </vs-button>
                    <vs-button class="btn-chat" shadow primary>
                        <i class='bx bx-chat' ></i>
                        <span class="span">
            54
          </span>
                    </vs-button>
                </template>
            </vs-card>
        </vs-card-group>


    </div>
</template>
