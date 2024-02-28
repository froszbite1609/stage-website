<template>
    <article class="profile-sidebar">
        <!-- ส่วนด้านบนสีน้ำเงิน -->
        <section
            class="relative bg-[#72CACF] dark:bg-[#30888D] w-[292px] h-12 rounded-t-md border-t border-x border-[#3C3C3C4A] dark:border-[#545454A6]"
        >
            <!-- รูปโปรไฟล์ -->
            <div class="profile-picture absolute mt-5 left-3">
                <img
                    src="../assets/img/ProfileStage.jpg"
                    alt="Proflie "
                    class="w-14 h-14 rounded-full"
                />
            </div>
        </section>
        <!-- ส่วนด้านล่างสีขาว -->
        <section
            class="p-5 bg-[#F9F9F9] dark:bg-[#242424] w-[292px] h-[90px] rounded-b-md border-b border-x border-[#3C3C3C4A] dark:border-[#545454A6]"
        >
            <!-- ชื่อผู้ใช้งาน -->
            <div class="user-name text-[#213547] dark:text-[#FFFFFFDE] text-xl font-bold mt-3">
                Weroniczka
            </div>
            <!-- อีเมล -->
            <div class="email text-xs text-[#3C3C3CB2] dark:text-[#EBEBEB99]">
                66025010@up.ac.th
            </div>
        </section>
    </article>
</template>
